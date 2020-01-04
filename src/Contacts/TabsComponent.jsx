import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ContactList from "./ContactList";
import Report from "../Reports/Report";
import BusinessCard from "./BusinessCard";

const TabsComponent = props => {
  const TabPanel = props => {
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
  };

  const useStyles = makeStyles(theme => ({
    tabs: {
      flexGrow: 1
    },
    toolbar: {
      minHeight: 54
    }
  }));

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMinWidth600px = useMediaQuery("(min-width:600px)");

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Tabs
            className={classes.tabs}
            centered={isMinWidth600px}
            variant={isMinWidth600px ? "standard" : "fullWidth"}
            value={value}
            onChange={handleChange}
          >
            <Tab label="Contacts" />
            <Tab label="Reports" />
          </Tabs>
          <Tooltip title="Dark Mode" PopperProps={{ disablePortal: true }}>
            <IconButton color="inherit" onClick={props.onClick}>
              <Brightness4Icon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.loading ? (
          <div id="progress-indicator" data-testid="progress-indicator">
            <CircularProgress />
          </div>
        ) : (
          <ContactList
            data={props.data}
            OnUserClickedComponent={BusinessCard}
          />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Report data={props.data} />
      </TabPanel>
    </>
  );
};

export default TabsComponent;
