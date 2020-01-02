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
  }

  if(props.page === "contactpage"){
    return(
      <>
        <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
          <Typography component={'div'} gutterBottom>
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
  }
  return (
    <>
      <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <Typography component={'div'} gutterBottom>
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


export default ContactDialog;