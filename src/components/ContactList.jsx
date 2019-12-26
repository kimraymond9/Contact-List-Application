import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import React from "react";
import BusinessCardDialog from "./BusinessCardDialog";
import ContactListItem from "./ContactListItem";
import SearchBar from "./SearchBar";
import "../App.css";

class ContactList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clickedUser: null,
      currentTextFieldInput: null,
    };
    this.handleBusinessCardDialogClose = this.handleBusinessCardDialogClose.bind(this)
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    event.preventDefault();
    this.setState({ currentTextFieldInput: event.target.value });
  }


  render(){
    if (!this.props.data) {
      return null;
    } else {
      return (
        <>
          <SearchBar onChange={this.handleChange} />
          <BusinessCardDialog open={this.state.open} onClose={this.handleBusinessCardDialogClose} user={this.state.clickedUser}/>
          <List>
            {this.props.data.map(user => {
              if (user.name.toLowerCase().includes(this.state.currentTextFieldInput) ||
              user.email.toLowerCase().includes(this.state.currentTextFieldInput) ||
              this.state.currentTextFieldInput == null){
                return <>
                  <ContactListItem user={user} handleClick={this.handleClick}/>
                  <Divider variant="inset" component="li" />
                </>
              }else{
                return null;
              }
            })}
          </List>
        </>
      );
    }
  }
  }


export default ContactList;