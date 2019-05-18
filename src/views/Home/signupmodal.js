import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row,Col} from 'reactstrap'
import './home.css'
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";

// import modalStyle from "../../assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import modalStyle from 'assets/jss/material-kit-react/modalStyle.jsx'
function Transition(props) {
  return <Slide direction="down" {...props} />;
}

 class SignUpModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render(){
    const { classes } = this.props;
    return (
      <div style={{overflowX:'none'}}>

        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          fullWidth={true}
          open={this.props.open}
          TransitionComponent={Transition}
          maxWidth="sm"
          keepMounted
          onClose={() => this.props.curinst.setState({signupmodal:false})}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}>
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.props.curinst.setState({signupmodal:false})}>
              <Close className={classes.modalClose} />
            </IconButton>
          </DialogTitle>
          <DialogContent
          id="modal-slide-description"
            className={classes.modalBody}>
          
            <div className="signinform">

              <Row >
               <Col className="nopadding" md={{offset:1,size:11}}>
                <select className="selectform">
                  <option>CANDIDATE ZONE(beta)</option>
                  <option>EMPLOYER ZONE(beta)</option>
                </select>
                </Col>
              </Row>
              <br></br>
              <Row >
                <Col className="nopadding" md={{offset:1,size:11}}>
                  <h5 style={{fontFamily:" 'Share Tech Mono', monospace"}} >SIGN UP</h5>
                </Col>
                </Row>
                <Row className="noacc">
               <Col className="nopadding" md={{offset:1,size:11}}>ALREADY HAVE AN ACCOUNT? <a href="#">SIGN IN</a>
               </Col>
                </Row>
                <br></br>
                <Row >
                  <Col className="nopadding" md={{offset:1,size:8}}>
                      <label>EMAIL ID</label>
                  </Col>
                </Row>
                <Row >
                  <Col md={{offset:1,size:10}} className="nopadding">
                      <input placeholder="Enter your email id" className="email"></input>
                  </Col> 
                </Row>
                <br></br>
                <Row>
                  <Col className="nopadding" md={{offset:1,size:8}} >
                    <label>MOBILE NUMBER</label>
                  </Col>
                </Row>

                <Row>
                  <Col md={{offset:1,size:10}} className="nopadding">
                    <select type="select" className="code">
                    <option>+91</option>
                    <option>+65</option><option>+41</option><option>+1</option>
                    </select><input placeholder="Enter the Mobile Number" type="password" className="mobile"></input><span className="generate">REGISTER</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={{offset:1}}>
                    <input style={{padding:0}} className="checkbox" type="checkbox"></input><span style={{fontSize:"10px"}}>BY CREATING AN ACCOUNT YOU AGREE TO OUR  TERMS & CONDITIONS AND PRIVACY POLICY.
                    </span>
                    </Col>
                  </Row>
            </div>
          
          
          </DialogContent>
          
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(SignUpModal);