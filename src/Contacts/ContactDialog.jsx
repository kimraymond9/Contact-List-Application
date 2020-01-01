import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from "@material-ui/core/Typography";
import BusinessCard from "./BusinessCard";
import CompanyCatchphrases from "../Reports/CompanyCatchphrases";

const ContactDialog = (props) => {

  if(!props.user){
    return null
  }else{
    if(props.page === "contactpage"){
      return(
        <>
          <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
            <Typography gutterBottom>
              <BusinessCard user={props.user}/>
            </Typography>
            <DialogActions>
              <Button autoFocus onClick={props.onClose} color="primary">
                Back
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )
    }else{
      return (
        <>
          <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
            <Typography gutterBottom>
              <CompanyCatchphrases user={props.user}/>
            </Typography>
            <DialogActions>
              <Button autoFocus onClick={props.onClose} color="primary">
                Back
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )
    }
  }
}

export default ContactDialog;