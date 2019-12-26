import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const BusinessCard = (props) => {

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 445,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  }));

  const classes = useStyles();

  if(!props.user){
    return null;
  }else{
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label={props.user.name} src={`https://i.pravatar.cc/300?img=${props.user.id}`}>
            </Avatar>
          }
          title={props.user.name}
          subheader={props.user.email}
        />
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
          title="User Info"
        />
        <CardContent>
          <Typography>
            {props.user.phone}
          </Typography>
          <Typography>
            {props.user.website}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default BusinessCard;