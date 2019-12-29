import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import BusinessCardDialog from "./BusinessCardDialog";
import ContactListItem from "./ContactListItem";
import SortBy from "./SortBy";
import SearchBar from "./SearchBar";

class ContactList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clickedUser: null,
      currentTextFieldInput: null,
      sortSelected: null,
      data: props.data,
    };
    this.handleBusinessCardDialogClose = this.handleBusinessCardDialogClose.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);

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

  handleSearchChange(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({ currentTextFieldInput: event.target.value.trim() });
  }

  handleSortChange(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({ sortSelected: event.target.value });

    var tempArray;

    if (event.target.value === "AtoZ") {
      tempArray =
        this.state.data.sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      this.setState({ data: tempArray })
    }
    if (event.target.value === "ZtoA") {
      tempArray =
        this.state.data.sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      this.setState({ data: tempArray })
    }
  }

  render(){
    if (!this.state.data) {
      return null;
    } else {
      return (
        <>
          <SearchBar onChange={this.handleSearchChange} />
          <SortBy onChange={this.handleSortChange}/>
          <BusinessCardDialog open={this.state.open} onClose={this.handleBusinessCardDialogClose} user={this.state.clickedUser}/>
          <List>
            {this.state.data.map(user => {
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