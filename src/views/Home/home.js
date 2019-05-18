import React from 'react'
import {Row,Col} from 'reactstrap'
import Button from 'components/CustomButtons/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignInModal from './signinmodal'
import SignUpModal from './signupmodal'

// import YouTubeSearchedForRounded from '@material-ui/icons/YoutubeSearchedForRounded'

export default class Home extends React.Component{



    constructor (props){
        super(props)
        this.state = {
            signinmodal:false,
            signupmodal:false
        }
        this.signinmodal = this.signinmodal.bind(this)
       this.signupmodal =  this.signupmodal.bind(this)
    }


    signinmodal(){
            this.setState({
                signinmodal:true,
                signupmodal:false
            })

    }

    signupmodal(){

        this.setState({
            signupmodal:true,
            signinmodal:false
        })

    }

    render(){

        return(
            <div>
                <SignInModal open={this.state.signinmodal} curinst = {this} />
                <SignUpModal open= {this.state.signupmodal}  curinst = {this}/>
                <div className="logo">
                <h2  style={{zIndex:1000,fontFamily:"'Share Tech Mono', monospace",color:"#0b1643",paddingTop:"3px"}} >GIGXAPP</h2>
                <img src="Assets/logo1.jpg" style={{width:"120px",padding:0}}></img>
                </div>

            <Row style={{position:"absolute",top:"75%",zIndex:100000,width:"100%"}} className="justify-content-start">
                     <Col sm="1" md="1" lg="1" style={{padding:0}} ><img src="Assets/6-1.png" style={{width:"150px",height:"150px"}} ></img></Col> 
                    <Col style={{paddingTop:"40px"}}>
                    <h2 style={{fontFamily:"'Share Tech Mono', monospace",fontWeight:1000,color:"#0b1643"}}>GIGXAPP - HIRING MARKETPLACE FOR READY TALENT</h2>
                     <h4 style={{fontFamily:"'Share Tech Mono', monospace",color:"#0b1643"}}>To hire or  get hired instantly within 1-9 days</h4>
                     {/* <Button round><i class="fab fa-youtube"></i> Watch Video</Button> */}
                     </Col>
                </Row>
            <Row style={{position:'absolute',right:"2%",zIndex:10000}}>
            <div>
                <Button onClick={this.signupmodal} size="lg" color="transparent"  round style={{fontFamily:"'Share Tech Mono', monospace",fontWeight:1000,fontSize:"21px",color:"#0b1643"}}>Sign Up</Button>
           </div>
               <div style={{paddingLeft:"10px"}}>
                <Button onClick={this.signinmodal} size="lg" color="transparent" round style={{fontFamily:"'Share Tech Mono', monospace",fontWeight:1000,fontSize:"21px",color:"#0b1643"}}> Sign In </Button> 
              </div> 
            </Row>
          		<div id="mb_background" className="mb_background">
			<img className="mb_bgimage" src="Assets/1-2.png" alt="Background"/>
			<div className="mb_overlay"></div>
			<div className="mb_loading"></div>
		</div>
		<div id="mb_pattern" className="mb_pattern"></div>
                <div id="mb_menu" className="mb_menu">
			<a href="#" data-speed="1000" data-easing="easeOutBack">Candidate Zone</a>
			<a href="#" data-speed="1000" data-easing="easeInExpo">Employer Zone</a>
			<a href="#" data-speed="1000" data-easing="easeOutBack">Expert Zone</a>
			<a href="#" data-speed="1000" data-easing="easeInExpo">Institution Zone</a>
		</div>
		<div id="mb_content_wrapper" className="mb_content_wrapper">
			<span className="mb_close"></span>
			<div className="mb_content">
				<h2>Candidate Zone</h2>
				<div className="mb_content_inner">
                <p >-> Easy web & android apps for immediate jobs</p>
                                        
                                         {/* <p >-> Unlimited earning potential & opportunities</p> */}
                                        
                                        <p >-> Flexible work & freelance options</p>
                                        
                                        <p>-> Optional document checks & bot support</p>
                                        
                                         <p>-> Instant initial offers from employers</p>
                                         <Row style={{paddingLeft:"15px"}}>
                                         <Button style={{backgroundColor:'#003462',textAlign:'center'}} round><i class="fab fa-youtube"></i> Watch Video</Button>
                                         </Row>
                </div>
			</div>
			<div className="mb_content">
				<h2>Employer Zone</h2>
				<div className="mb_content_inner">
                
                                        <p  >-> All-9-n-one affordable web & android app</p>         
                                        <p>-> Hire fast with ready talent pool</p>                                        
                                        <p>-> Flexible instant & smart web integration</p>
                                        {/*caps GIGX - hiring market place for ready talent */}
                                         {/* old first line = new sec line */}
                                        <p>-> Professional background checks & bot analytics</p>                                       
                                        
                                        {/* <p>-> Smart contracts & expert consultation</p> */}
                                        <Row style={{paddingLeft:"15px"}}>
                                         <Button style={{backgroundColor:'#003462',textAlign:'center'}} round><i class="fab fa-youtube"></i> Watch Video</Button>
                                         </Row>
				</div>
			</div>
			<div className="mb_content">
                <p className="comingsoon">coming soon...</p>
				<h2>Expert Zone</h2>
                                        
				<div className="mb_content_inner">
                <p  >-> Easy web & android apps for expert consulting</p>
                                        
                                         <p>-> Improve your earning potential</p>
                                       
                                        <p>-> Flexible work options with prepaid consultation</p>
                                         <p >-> Smart contracts for assured payouts</p>
                                         <Row style={{paddingLeft:"15px"}}>
                                         <Button style={{backgroundColor:'#003462',textAlign:'center'}} round><i class="fab fa-youtube"></i> Watch Video</Button>
                                         </Row>
				</div>
			</div>
			<div className="mb_content">
                <p className="comingsoon">coming soon...</p>
				<h2>Institution Zone</h2>
				<div className="mb_content_inner">
                                        
                                        <p >-> Instant internship & placement opportunities</p>
                                        
                                        
                                        <p >-> Faster learning & earning potential</p>
                                        
                                        
                                        <p >-> Smart integration with your website</p>
                                        
                                        
                                        <p >-> All-in-one app with real-time analytics</p>
                                        <Row style={{paddingLeft:"15px"}}>
                                         <Button style={{backgroundColor:'#003462',textAlign:'center'}} round><i class="fab fa-youtube"></i> Watch Video</Button>
                                         </Row>
				</div>
			</div>
		</div>
            </div>
        )


    }



}