import React from "react";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import "../App.css";

const ContactListItem = (props) => {
  
  if(!props.user){
  }

  return (
    <ListItem key={props.user.id} alignItems="flex-start" button onClick={() => props.handleClick(props.user)}>
      <ListItemAvatar>
        <Avatar src={`https://i.pravatar.cc/300?img=${props.user.id}`} />
      </ListItemAvatar>
      <ListItemText
        primary={props.user.name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              color="textPrimary"
            >
              {props.user.email}
            </Typography>
            {" — " + props.user.phone}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}


export default ContactListItem;