import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from "@material-ui/core/Typography";
import BusinessCard from "./BusinessCard";

const BusinessCardDialog = (props) => {

  if(!props.user){
    return null
  }else{
    return (
      <>
        <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>
          <DialogContent dividers>
            <Typography gutterBottom>
              <BusinessCard user={props.user}/>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={props.onClose} color="primary">
              Close Card
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

export default BusinessCardDialog;