import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      mobile: 200,
      xs: 300,
      sm: 700,
      md: 1000,
      lg: 1400,
      xl: 1920,
    },
  },
})
const useStyles = makeStyles((themes) => ({
  text:{
    fontFamily: "sans-serif",
    fontSize: "calc(7px + 2vmin)",
    [theme.breakpoints.down('xs')]: {
      width: "90%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "90%",
    },
    [theme.breakpoints.up('md')]: {
      width: "90%",
    },
    [theme.breakpoints.up('lg')]: {
      width: "25%",
    },
    paddingBottom: "10%"
  },
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 50,
    paddingTop: 50,
  },
  pictureCardContent:{
    [theme.breakpoints.down('xs')]: {
      width: "90%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "90%",
    },
    [theme.breakpoints.up('md')]: {
      width: "90%",
    },
    [theme.breakpoints.up('lg')]: {
      width: "70%",
    },
  },
  textCardContent:{
  },
  gridList:{
    height: "auto",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  button:{
    width: "100%"
  },
  Pictures:{
    width: "100%",
    height: "100%",
  },
}));
export default function Pictures(props) {
  const classes = useStyles();
  
    return(
      <Grow in={true} timeout={1000}>
        <div className={classes.root}>
          <div className={classes.text}>
            <Card className={classes.textCardContent}>
              <CardContent >
                <Typography color="textPrimary">
                  <h1><strong>{props.name}</strong></h1>
                </Typography>
                <Typography variant="h6" color="textPrimary" paragraph="true">
                  <strong><i>{props.title}</i></strong>
                </Typography>
                <Typography variant="body1" color="textPrimary"  paragraph="true">
                  {props.paragraph1}
                </Typography>
                <Typography variant="body1" color="textPrimary"  paragraph="true">
                  {props.paragraph2}
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} href={props.externallink} target="_blank"rel="noopener noreferrer" size="medium" variant="outlined">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <Card className={classes.pictureCardContent}>
            <GridList cellHeight={"100%"}className={classes.gridList} cols={1}>
              {props.link.map((tile) => (
                <GridListTile key={tile} cols={tile.cols || 1}>
                      <img className={classes.Pictures} src={tile} alt={tile}/>
                </GridListTile>
              ))}
            </GridList>
          </Card>
        </div>
      </Grow>
      
    )
}

