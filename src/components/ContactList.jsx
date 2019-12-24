import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "../App.css";


class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render(){
    if (!this.props.data) {
      return null;
    } else {
      return (
        <List>
          {this.props.data.map(user => {
            return (
              <div>
                <ListItem alignItems="flex-start" button>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {user.username}
                        </Typography>
                        {" — " + user.email}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            );
          })}
        </List>
      );
    }
  }
}

export default ContactList;