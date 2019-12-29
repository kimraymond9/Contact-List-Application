import React from "react";
import Tabs from "./TabsComponent";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class ContactListApp extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        data: null,
        loading: true,
        isThemeLight: true,
      };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  componentDidMount() {
    return fetch(this.props.url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson, loading: false });
      })
      .catch(error => console.error(error));
  }

  handleThemeChange() { 
    if (this.state.isThemeLight){
      this.setState({ isThemeLight: false });
    }else{
      this.setState({ isThemeLight: true });
    }
  }

  render() {
    const darkTheme = createMuiTheme({
      palette: {
        type: 'dark',
      }
    });
    const lightTheme = createMuiTheme({
      palette: {
        type: 'light',
      }
    });
    return (
      <MuiThemeProvider theme={this.state.isThemeLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <Tabs data={this.state.data} loading={this.state.loading} onClick={this.handleThemeChange}/>
      </MuiThemeProvider>
    )
  }
}

export default ContactListApp;
