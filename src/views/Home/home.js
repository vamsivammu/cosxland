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
            <div className="bg">
                <SignInModal open={this.state.signinmodal} curinst = {this} />
                <SignUpModal open= {this.state.signupmodal}  curinst = {this}/>
                <Row>
            <Col md={{size:6}} sm={{size:6}} xs={{size:6}}>
                <div className="logo">
                <h2  style={{zIndex:1000,fontFamily:"'Share Tech Mono', monospace",color:"#0b1643",paddingTop:"3px"}} >GIGXAPP</h2>
                <img src="Assets/logo1.jpg" style={{width:"120px",padding:0}}></img>
                </div>
            </Col>
                <Col md={{size:6}} sm={{size:6}} xs={{size:6}} >
                    <button className="signup" style={{float:'right'}} onClick={this.signupmodal}>SIGN UP</button>
                    <button className="signin" style={{float:'right'}} onClick={this.signinmodal}>SIGN IN</button>
                    
                </Col>

            </Row>

            <Row className="emptyrow"></Row>
            <Row>
                <Col md={{size:2}} className="data">
                    
                    <p>> EASY TO USE WEB APPS</p>
                    
                    <p>> 60 SECONDS FOR YOUR POSTS</p>
                    
                    <p>> SMART CONTRACTS FOR TRIALS</p>
                    
                    <p>> BOT SCREENING & ANALYTICS</p>
                      
                    <button><i class="fa fa-play" aria-hidden="true"></i> WATCH VIDEO</button>

                </Col>
            </Row>

            <Row  className="data1">

            <Col md={{size:1}} sm={{size:1}} xs={{size:1}}>
                <img src='Assets/6-1.png'></img>
            </Col>
            <Col md={{size:6}} sm={{size:6}} xs={{size:6}} >
            <Row style={{color:'white',fontWeight:700,marginTop:"15px",fontSize:'23px'}}>
                GIGXAPP-HIRING MARKETPLACE FOR READY TALENT
            </Row>
            <Row style={{color:'#003462',fontSize:'20px'}}>
                To hire or get hired instantly within 1-9 days
            </Row>
            </Col>
            </Row>
    </div>
        )


    }



}