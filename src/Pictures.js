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
      width: "60%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "60%",
    },
    [theme.breakpoints.up('md')]: {
      width: "75%",
    },
    [theme.breakpoints.up('lg')]: {
      width: "25%",
    },
    paddingBottom: 100
  },
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 50,
    paddingTop: 50,
    backgroundColor: "#e8f1f5",
  },
  gridList:{
    height: "750px",
    alignSelf: "center",
    width: "1000px",
    [theme.breakpoints.down('xs')]: {
      width: "200px",
    },
    [theme.breakpoints.down('sm')]: {
      width: "750px",
    },
  },
  cardContent:{
    backgroundColor: "#FFAFA",
  },
  button:{
    width: "100%"
  }
}));
export default function Pictures(props) {
  const classes = useStyles();
  
    return(
      <Grow in={true} timeout={1000}>
        <div className={classes.root}>
          <div className={classes.text}>
            <Card className={classes.cardContent}>
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  <h1><strong>{props.name}</strong></h1>
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  {props.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} href={props.externallink} target="_blank"rel="noopener noreferrer" size="medium" variant="outlined">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <Card className={classes.cardContent}>
            <GridList cellHeight={650}className={classes.gridList} cols={1}>
              {props.link.map((tile) => (
                <GridListTile key={tile} cols={tile.cols || 1}>
                      <img src={tile} alt={tile}/>
                </GridListTile>
              ))}
            </GridList>
          </Card>
        </div>
      </Grow>
      
    )
}

