$(function() {
    var $menu			= $('#mb_menu'),
    $menuItems			= $menu.children('a'),
    $mbWrapper			= $('#mb_content_wrapper'),
    $mbClose			= $mbWrapper.children('.mb_close'),
    $mbContentItems		= $mbWrapper.children('.mb_content'),
    $mbContentInnerItems= $mbContentItems.children('.mb_content_inner');
    $mbPattern			= $('#mb_pattern'),
    $works				= $('#mb_imagelist > li'),
    $mb_bgimage			= $('#mb_background > img'),
    
    Menu		 		= (function(){
        
        var init		= function() {
            preloadImages();
            initPlugins();
            initPattern();
            initEventsHandler();
        },
        //preloads the images for the work area (data-bgimg attr)
        preloadImages	= function() {
            $works.each(function(i) {
                $('<img/>').attr('src' , $(this).children('img').data('bgimg'));
            });
        },
        //initialise the jScollPane (scroll plugin)
        initPlugins		= function() {
            $mbContentInnerItems.jScrollPane({
                verticalDragMinHeight: 40,
                verticalDragMaxHeight: 40
            });
        },
        /*
            draws 16 boxes on a specific area of the page.
            we randomly calculate the top, left, and rotation angle for each one of them
         */
        initPattern		= function() {
            for(var i = 0; i < 16 ; ++i) {
                //random opacity, top, left and angle
                var o		= 0,
                t		= Math.floor(Math.random()*196) + 5, // between 5 and 200
                l		= Math.floor(Math.random()*696) + 5, // between 5 and 700
                a		= Math.floor(Math.random()*101) - 50; // between -50 and 50
                        
                $el		= $('<div>').css({
                    opacity			: o,
                    top				: t + 'px',
                    left			: l + 'px'
                });
                    
                if (!$.browser.msie)
                    $el.transform({'rotate'	: a + 'deg'});
                    
                $el.appendTo($mbPattern);
            }
            $mbPattern.children().draggable(); //just for fun
        },
        /*
            when the User closes a content item, we move the boxes back to the original place,
            with new random values for top, left and angle though
         */
        disperse 		= function() {
            $mbPattern.children().each(function(i) {
                //random opacity, top, left and angle
                var o			= 0.0001,
                t			= Math.floor(Math.random()*196) + 5, // between 5 and 200
                l			= Math.floor(Math.random()*696) + 5, // between 5 and 700
                a			= Math.floor(Math.random()*101) - 50; // between -50 and 50
                $el			= $(this),
                param		= {
                    width	: '10px',
                    height	: '10px',
                    opacity	: o,
                    top		: t + 'px',
                    left	: l + 'px'
                };
                        
                if (!$.browser.msie)
                    param.rotate	= a + 'deg';
                        
                $el.animate(param, 1000, 'easeOutExpo');
            });
        },
        initEventsHandler	= function() {
            /*
                click a link in the menu
             */
            $menuItems.bind('click', function(e) {
                var $this	= $(this),
                pos		= $this.index(),
                speed	= $this.data('speed'),
                easing	= $this.data('easing');
                //if an item is not yet shown
                if(!$menu.data('open')){
                    //if current animating return
                    if($menu.data('moving')) return false;
                    $menu.data('moving', true);
                    $.when(openItem(pos, speed, easing)).done(function(){
                        $menu.data({
                            open	: true,
                            moving	: false
                        });
                        showContentItem(pos);
                        $mbPattern.children().fadeOut(500);
                    });
                }
                else{
                    $menu.data('open', false);
                console.log("closing the box")
                /*
                    if we would want to show the default image when we close:
                    changeBGImage('images/default.jpg');
                 */
                $mbPattern.children().fadeIn(500, function() {
                    $mbContentItems.hide();
                    $mbWrapper.hide();
                });
                    
                disperse();
                $menu.data('moving', true);
                $.when(openItem(pos, speed, easing)).done(function(){
                    $menu.data({
                        open	: true,
                        moving	: false
                    });
                    showContentItem(pos);
                    $mbPattern.children().fadeOut(500);
                });
                }
                    
                return false;
            });
                
            /*
                click close makes the boxes animate to the top of the page
             */
            $mbClose.bind('click', function(e) {
                $menu.data('open', false);
                console.log("closing the box")
                /*
                    if we would want to show the default image when we close:
                    changeBGImage('images/default.jpg');
                 */
                $mbPattern.children().fadeIn(500, function() {
                    $mbContentItems.hide();
                    $mbWrapper.hide();
                });
                    
                disperse();
                return false;
            });
                
            /*
                click an image from "Works" content item,
                displays the image on the background
             */
            $works.bind('click', function(e) {
                var source	= $(this).children('img').data('bgimg');
                changeBGImage(source);
                return false;
            });
                    
        },
        /*
            changes the background image
         */
        changeBGImage		= function(img) {
            //if its the current one return
            if($mb_bgimage.attr('src') === img || $mb_bgimage.siblings('img').length > 0)
                return false;
                        
            var $itemImage = $('<img src="'+img+'" alt="Background" class="mb_bgimage" style="display:none;"/>');
            $itemImage.insertBefore($mb_bgimage);
                
            $mb_bgimage.fadeOut(1000, function() {
                $(this).remove();
                $mb_bgimage = $itemImage;
            });
            $itemImage.fadeIn(1000);
        },
        /*
            This shows a content item when there is already one shown:
         */
        showContentItem		= function(pos) {
            $mbContentItems.hide();
            $mbWrapper.show();
            $mbContentItems.eq(pos).show().children('.mb_content_inner').jScrollPane();
        },
        /*
            moves the boxes from the top to the center of the page,
            and shows the respective content item
         */
        openItem			= function(pos, speed, easing) {
            return $.Deferred(
            function(dfd) {
                $mbPattern.children().each(function(i) {
                    var $el			= $(this),
                    param		= {
                        width	: '100px',
                        height	: '100px',
                        top		: 154 + 100 * Math.floor(i/4),
                        left	: 200 + 100 * (i%4),
                        opacity	: 1
                    };
                            
                    if (!$.browser.msie)
                        param.rotate	= '0deg';
                            
                    $el.animate(param, speed, easing, dfd.resolve);
                });
            }
        ).promise();
        };
            
        return {
            init : init
        };
        
    })();

    /*
        call the init method of Menu
     */
    Menu.init();
});