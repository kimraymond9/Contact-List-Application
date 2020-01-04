import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import InteractiveMap from "./InteractiveMap";
import ContactsByLetter from "./ContactsByLetter";
import ContactList from "../Contacts/ContactList";
import TopLevelDomains from "./TopLevelDomains";

const Report = props => {
  const useStyles = makeStyles(theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();

  return (
    <div className="panels">
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component={"div"} className={classes.heading}>
            Interactive Map
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <InteractiveMap data={props.data} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component={"div"} className={classes.heading}>
            Company Catchphrases
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component={"div"}>
            <ContactList data={props.data} page={"reportpage"} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component={"div"} className={classes.heading}>
            Number of Contacts by Letter
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component={"div"}>
            <ContactsByLetter data={props.data} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component={"div"} className={classes.heading}>
            Top Level Domains
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component={"div"}>
            <TopLevelDomains data={props.data} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Report;
