import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { CircularProgress } from "@material-ui/core";

const ContactListItem = props => {
  const [loading, setLoading] = useState(true);

  const useStyles = makeStyles(theme => ({
    hidden: {
      display: "none"
    }
  }));

  const classes = useStyles();

  return (
    <ListItem
      key={props.user.id}
      alignItems="flex-start"
      button
      onClick={() => props.handleClick(props.user)}
      data-testid={`user-list-item-${props.user.id}`}
    >
      <ListItemAvatar>
        <>
          {loading && <CircularProgress />}
          <Avatar
            src={`https://i.pravatar.cc/300?img=${props.user.id}`}
            onLoad={() => setLoading(false)}
            className={loading ? classes.hidden : ""}
          />
        </>
      </ListItemAvatar>
      <ListItemText
        primary={props.user.name}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              {props.user.email}
            </Typography>
            {" — "}
            <span>{props.user.phone}</span>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ContactListItem;
