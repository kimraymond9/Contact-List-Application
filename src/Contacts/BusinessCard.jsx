import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PublicIcon from "@material-ui/icons/Public";


const BusinessCard = (props) => {

  const backgrounds = [
    'https://cdn.hipwallpaper.com/m/98/68/fxgPch.jpg',
    'https://cdn.hipwallpaper.com/m/56/95/DdUOci.png',
    'https://cdn.hipwallpaper.com/m/51/52/UoTkaw.jpg',
    'https://cdn.hipwallpaper.com/m/50/84/zXovVH.jpg',
    'https://cdn.hipwallpaper.com/m/26/32/DvZqGx.jpg',
    'https://cdn.hipwallpaper.com/m/96/28/oRbwnS.jpg',
    'https://cdn.hipwallpaper.com/m/83/29/LtMErQ.jpg',
    'https://cdn.hipwallpaper.com/m/83/28/Qxu6eW.jpg',
    'https://cdn.hipwallpaper.com/m/35/95/JLZiRn.jpg',
    'https://cdn.hipwallpaper.com/m/81/89/fORF4U.jpg'
  ]

  const useStyles = makeStyles(theme => ({
    paperRoot: {
      width: "500px",
      height: "315px",
      background: `url(${backgrounds[props.user.id - 1]})`,
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
      ['@media (max-width:470px)']: { // eslint-disable-line no-useless-computed-key
        width: '300px',
        height: '189px',
        marginTop: "15%",
      }
    },
    leftBusinessCardName:{
      textTransform: "uppercase",
      color: "Black",
      fontFamily: 'Raleway',
      fontSize: 20,
      ['@media (max-width:470px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: 10,
        marginTop: "10%"
      }
    },
    leftBusinessCardCompany: {
      textTransform: "uppercase",
      color: "Black",
      fontFamily: 'Raleway',
      fontSize: 10,
      ['@media (max-width:470px)']: { // eslint-disable-line no-useless-computed-key
        fontSize:8,
        marginTop: "10%"
      }
    },
    rightBusinessCard:{
      textTransform: "capitalize",
      fontFamily: 'Raleway',
      fontSize: 10,
      ['@media (max-width:470px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: 6
      }
    }
  }));

  const classes = useStyles();

  if(!props.user){
    return null;
  }
  return (
    <>
      <Paper className={classes.paperRoot}>
        <Grid className={classes.gridContainer} container>
          <Grid
            className={classes.gridItem}
            item
            xs={6}
            align="center"
          >
            <Typography component={'div'} className={classes.leftBusinessCardName} >
              {props.user.name}
            </Typography>
            <Typography component={'div'} className={classes.leftBusinessCardCompany}>
              {props.user.company.name}
            </Typography>
          </Grid>
          <Grid
            className={classes.gridItem}
            item
            xs={6}
          >
            <div style={{ borderLeft: "2px solid grey"}}>
              <div style={{ marginLeft: "20%" }}>
                <Typography component={'div'} className={classes.rightBusinessCard}>
                  <PhoneIcon className={classes.icon} />
                  {props.user.phone}
                </Typography>
                <Typography component={'div'} className={classes.rightBusinessCard}>
                  <EmailIcon className={classes.icon} />
                  {props.user.email}
                </Typography>
                <Typography component={'div'} className={classes.rightBusinessCard}>
                  <PublicIcon className={classes.icon} />
                  {props.user.website}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default BusinessCard;