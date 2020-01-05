import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

const CompanyCatchphrases = props => {
  const [loading, setLoading] = useState(true);

  const useStyles = makeStyles(theme => ({
    paperRoot: {
      width: "500px",
      height: "315px",
      "@media (max-width:600px)": {
        // eslint-disable-line no-useless-computed-key
        width: "400px",
        height: "252px"
      },
      "@media (max-width:470px)": {
        // eslint-disable-line no-useless-computed-key
        width: "300px",
        height: "189px"
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
    spinner: {
      width: "40px",
      display: "block",
      margin: "auto",
      top: "50%",
      position: "relative"
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.paperRoot} id="image">
      {loading && (
        <div data-testid="catchphrases-progress-indicator">
          <CircularProgress className={classes.spinner} />
        </div>
      )}
      <img
        src={`https://picsum.photos/id/${props.user.id + 9}/500/315`}
        alt={props.user.company.catchPhrase}
        onLoad={() => setLoading(false)}
        data-testid="company-image"
      />
      {!loading && (
        <div data-testid="company-catchphrase">
          <Typography
            component={"div"}
            className={classes.companyName}
            id="text"
          >
            {props.user.company.name}
          </Typography>
          <Typography
            component={"div"}
            className={classes.catchprases}
            id="text"
          >
            {props.user.company.catchPhrase}
          </Typography>
        </div>
      )}
    </Paper>
  );
};

export default CompanyCatchphrases;
