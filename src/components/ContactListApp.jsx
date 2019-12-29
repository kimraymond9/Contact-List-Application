import React from "react";
import Tabs from "./TabsComponent";

class ContactListApp extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        data: null,
        loading: true,
      };
  }

  componentDidMount() {
    return fetch(this.props.url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson, loading: false });
      })
      .catch(error => console.error(error));
  }

  render() {
    return <Tabs data={this.state.data} loading={this.state.loading}/>
  }
}

export default ContactListApp;
