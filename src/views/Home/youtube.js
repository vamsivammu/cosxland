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

 class Youtube extends React.Component{
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
          onClose={() => this.props.curinst.setState({youtube:false})}
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
              onClick={() => this.props.curinst.setState({youtube:false})}>
              <Close className={classes.modalClose} />
            </IconButton>
          </DialogTitle>
          <DialogContent
          id="modal-slide-description"
            className={classes.modalBody}>

    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rpe-TcufKh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          
          </DialogContent>
          
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(Youtube);