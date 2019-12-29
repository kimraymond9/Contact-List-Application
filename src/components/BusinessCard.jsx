import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PublicIcon from "@material-ui/icons/Public";

const BusinessCard = (props) => {

  const useStyles = makeStyles(theme => ({
    paperRoot: {
      width: "500px",
      height: "315px",
      background: "url(https://cdn.hipwallpaper.com/m/98/68/fxgPch.jpg)",
      backgroundSize: "100% 100%"
    },
    icon: {
      verticalAlign: "middle",
      color: "black"
    },
    gridContainer: {
      height: "100%"
    },
    gridItem: {
      padding: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  if(!props.user){
    return null;
  }else{
    return (
      <Paper className={classes.paperRoot}>
        <Grid className={classes.gridContainer} container>
          <Grid
            className={classes.gridItem}
            item
            xs={6}
            style={{ marginTop: "120px" }}
            align="center"
          >
            <Typography style={{ textTransform: "uppercase", color: "Black", fontFamily: 'Raleway', fontSize: 20}}>
              {props.user.name}
          </Typography>
            <Typography style={{ textTransform: "uppercase", color: "Black", fontFamily: 'Raleway' }}>
              {props.user.company.name}
          </Typography>
          </Grid>
          <Grid
            className={classes.gridItem}
            item
            xs={6}
            style={{ marginTop: "120px" }}
          >
            <div style={{ borderLeft: "2px solid grey"}}>
              <div style={{ marginLeft: "60px" }}>
                <Typography style={{ textTransform: "capitalize", fontFamily: 'Raleway', fontSize: 10 }}>
                  <PhoneIcon className={classes.icon} />
                  &nbsp;{props.user.phone}
              </Typography>
                <Typography style={{ textTransform: "lowercase", fontFamily: 'Raleway', fontSize: 10 }}>
                  <EmailIcon className={classes.icon} />
                  &nbsp;{props.user.email}
              </Typography>
                <Typography style={{ textTransform: "lowercase", fontFamily: 'Raleway', fontSize: 10 }}>
                  <PublicIcon className={classes.icon} />
                  &nbsp;{props.user.website}
              </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default BusinessCard;