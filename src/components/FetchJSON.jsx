import React from "react";
import "../App.css";
import ContactList from "./ContactList";

class FetchJSON extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    return fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson });
      })
      .catch(error => console.error(error));
  }

  render() {
    return <ContactList data={this.state.data} />;
  }
}

export default FetchJSON;
