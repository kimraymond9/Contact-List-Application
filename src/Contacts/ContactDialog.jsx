import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

const ContactDialog = props => (
  <Dialog
    onClose={props.onClose}
    aria-labelledby="customized-dialog-title"
    open={props.open}
    data-testid="contact-dialog"
  >
    <Typography component={"div"} gutterBottom>
      {props.children}
    </Typography>
    <DialogActions>
      <Button autoFocus onClick={props.onClose} color="primary">
        Back
      </Button>
    </DialogActions>
  </Dialog>
);

export default ContactDialog;
