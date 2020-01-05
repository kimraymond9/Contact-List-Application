import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PublicIcon from "@material-ui/icons/Public";
import { CircularProgress } from "@material-ui/core";

const backgrounds = [
  "https://cdn.hipwallpaper.com/m/98/68/fxgPch.jpg",
  "https://cdn.hipwallpaper.com/m/56/95/DdUOci.png",
  "https://cdn.hipwallpaper.com/m/51/52/UoTkaw.jpg",
  "https://cdn.hipwallpaper.com/m/50/84/zXovVH.jpg",
  "https://cdn.hipwallpaper.com/m/26/32/DvZqGx.jpg",
  "https://cdn.hipwallpaper.com/m/96/28/oRbwnS.jpg",
  "https://cdn.hipwallpaper.com/m/83/29/LtMErQ.jpg",
  "https://cdn.hipwallpaper.com/m/83/28/Qxu6eW.jpg",
  "https://cdn.hipwallpaper.com/m/35/95/JLZiRn.jpg",
  "https://cdn.hipwallpaper.com/m/81/89/fORF4U.jpg"
];

const BusinessCard = props => {
  const useStyles = makeStyles(theme => ({
    paperRoot: {
      width: "500px",
      height: "315px",
      "@media (max-width:600px)": {
        width: "400px",
        height: "252px"
      },
      "@media (max-width:470px)": {
        width: "300px",
        height: "189px"
      }
    },
    businessCardImage: {
      width: "inherit",
      height: "inherit",
      position: "fixed"
    },
    spinner: {
      width: "40px",
      display: "block",
      margin: "auto",
      top: "50%",
      position: "relative"
    },
    icon: {
      verticalAlign: "middle",
      color: "black"
    },
    gridContainer: {
      height: "100%"
    },
    gridItem: {
      padding: theme.spacing(1),
      marginTop: "24%",
      "@media (max-width:470px)": {
        width: "300px",
        height: "189px",
        marginTop: "15%"
      },
      zIndex: 1
    },
    leftBusinessCardName: {
      textTransform: "uppercase",
      color: "Black",
      fontFamily: "Raleway",
      fontSize: 20,
      "@media (max-width:470px)": {
        fontSize: 10,
        marginTop: "10%"
      }
    },
    leftBusinessCardCompany: {
      textTransform: "uppercase",
      color: "Black",
      fontFamily: "Raleway",
      fontSize: 10,
      "@media (max-width:470px)": {
        fontSize: 8,
        marginTop: "10%"
      }
    },
    rightBusinessCard: {
      textTransform: "capitalize",
      fontFamily: "Raleway",
      fontSize: 10,
      "@media (max-width:470px)": {
        fontSize: 6
      }
    }
  }));

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  return (
    <Paper className={classes.paperRoot}>
      {loading && (
        <div className={classes.spinner}>
          <CircularProgress data-testid="business-card-progress-indicator" />
        </div>
      )}
      <img
        className={classes.businessCardImage}
        src={backgrounds[props.user.id - 1]}
        alt=""
        onLoad={() => setLoading(false)}
        data-testid="business-card-image"
      />
      {!loading && (
        <Grid
          data-testid="business-card"
          className={classes.gridContainer}
          container
        >
          <Grid className={classes.gridItem} item xs={6} align="center">
            <Typography
              component={"div"}
              className={classes.leftBusinessCardName}
            >
              {props.user.name}
            </Typography>
            <Typography
              component={"div"}
              className={classes.leftBusinessCardCompany}
            >
              {props.user.company.name}
            </Typography>
          </Grid>
          <Grid className={classes.gridItem} item xs={6}>
            <div style={{ borderLeft: "2px solid grey" }}>
              <div style={{ marginLeft: "20%" }}>
                <Typography
                  component={"div"}
                  className={classes.rightBusinessCard}
                >
                  <PhoneIcon className={classes.icon} />
                  {props.user.phone}
                </Typography>
                <Typography
                  component={"div"}
                  className={classes.rightBusinessCard}
                >
                  <EmailIcon className={classes.icon} />
                  {props.user.email}
                </Typography>
                <Typography
                  component={"div"}
                  className={classes.rightBusinessCard}
                >
                  <PublicIcon className={classes.icon} />
                  {props.user.website}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default BusinessCard;
