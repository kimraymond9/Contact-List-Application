import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "../App.css";

const CompanyCatchphrases = (props) => {

  const useStyles = makeStyles(theme => ({
    paperRoot: {
      width: "500px",
      height: "315px",
      backgroundSize: "100% 100%",
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        width: '400px',
        height: '252px',
      },
      ['@media (max-width:470px)']: { // eslint-disable-line no-useless-computed-key
        width: '300px',
        height: '189px',
      }
    },
    companyName: {
      position: "absolute",
      bottom: "20%",
      left: "16px",
      fontSize: 30,
      color: "white",
      fontFamily: "raleway",
      fontWeight: "bolder"
    },
    catchprases: {
      position: "absolute",
      bottom: "10%",
      left: "16px",
      color: "white",
      fontFamily: "raleway"
    },
  }))

  const classes = useStyles();

  if(!props.user){
    return null;
  }

  return (
    <Paper className={classes.paperRoot} id="image" background={`url(https://picsum.photos/id/${props.user.id + 9}/1024/768)`}> {/* +9 changes the index to get different randomly generated images*/}
      <Typography component={'div'} className={classes.companyName} id="text">
        {props.user.company.name}
      </Typography>
      <Typography component={'div'} className={classes.catchprases} id="text">
        {props.user.company.catchPhrase}
      </Typography>
    </Paper>
  )
}

export default CompanyCatchphrases;