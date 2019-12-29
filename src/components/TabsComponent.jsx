import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';



import { makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';

import ContactList from "./ContactList";
import Report from "./Report";

import "../App.css";


const TabsComponent = (props) => {

  const TabPanel = (props) => {

    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  const useStyles = makeStyles(theme => ({
    tabs: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tabs className={classes.tabs} centered value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Contacts"/>
            <Tab label="Reports"/>
          </Tabs>
          <div>
            <Button color="inherit" onClick={props.onClick}>
              <Brightness4Icon/>
              &nbsp;
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div id="progressIndicator">
          {props.loading ? <CircularProgress /> : null}
        </div>
        <ContactList data={props.data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Report  data={props.data}/>
      </TabPanel>
      </div>
    </>
  )
}

export default TabsComponent;