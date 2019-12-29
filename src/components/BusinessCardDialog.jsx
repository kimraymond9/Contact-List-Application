import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from "@material-ui/core/Typography";
import BusinessCard from "./BusinessCard";

const BusinessCardDialog = (props) => {

  if(!props.user){
    return null
  }else{
    return (
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
  }
}

export default BusinessCardDialog;