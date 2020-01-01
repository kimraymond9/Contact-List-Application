import React from "react";
import Tabs from "./TabsComponent";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class ContactListApp extends React.Component {
  
  constructor(props) {
    super(props);
    const paletteTypePreference = 
      localStorage.getItem('contact-app-palette-type') || 'light';
      this.state = {
        data: null,
        loading: true,
        paletteType: paletteTypePreference
      };
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.theme = createMuiTheme({
      palette: {
        type: paletteTypePreference,
      }
    })
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
    const newPaletteType = this.state.paletteType === 'dark' ? 'light' : 'dark';
    this.theme = createMuiTheme({
      palette: {
        type: newPaletteType
      }
    })
    localStorage.setItem('contact-app-palette-type', newPaletteType);
    this.setState({ paletteType: newPaletteType });
  }

  render() {
    return (
      <>
      <MuiThemeProvider theme={this.theme}>
      <CssBaseline />
      <Tabs data={this.state.data} loading={this.state.loading} onClick={this.handleThemeChange}/>
      </MuiThemeProvider>
      </>
    )
  }
}

export default ContactListApp;