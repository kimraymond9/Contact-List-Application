import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import React from "react";
import BusinessCardDialog from "./BusinessCardDialog";
import ContactListItem from "./ContactListItem";
import "../App.css";



class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clickedUser: null,
    };
    this.handleBusinessCardDialogClose = this.handleBusinessCardDialogClose.bind(this)
  }

  handleClick = (user) => {
    this.setState({
      open: true,
      clickedUser: user
    });
  };

  handleBusinessCardDialogClose = () => {
    this.setState({
      open:false
    })
  }

  render(){
    if (!this.props.data) {
      return null;
    } else {
      return (
        <div>
          <BusinessCardDialog open={this.state.open} onClose={this.handleBusinessCardDialogClose} user={this.state.clickedUser}/>
        <List>
          {this.props.data.map(user => {
            return (
              <>
                <ContactListItem user={user} handleClick={this.handleClick}/>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
        </div>
      );
    }
  }
  }


export default ContactList;