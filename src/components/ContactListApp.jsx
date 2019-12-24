import React from "react";
import "../App.css";
import Tabs from "./TabsComponent";

class ContactListApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
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
        return <Tabs data={this.state.data}/>
}
}

export default ContactListApp;
