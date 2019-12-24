import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ContactList from "./ContactList";
import Report from "./Report";

const TabsComponent = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper
        },
        inline: {
            display: "inline"
        },
        tab: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        }
    }));

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

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


return(
    <div className={classes.tab}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Contacts" {...a11yProps(0)} />
                <Tab label="Reports" {...a11yProps(1)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <ContactList data={props.data}/>
      </TabPanel>
        <TabPanel value={value} index={1}>
            <Report />
      </TabPanel>
    </div>
)

}

export default TabsComponent;