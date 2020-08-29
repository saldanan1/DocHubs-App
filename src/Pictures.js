import React from 'react';
import './Pictures.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
    [theme.breakpoints.down('xs')]: {
      width: "40%",
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
  },
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 100,
    paddingTop: 200,
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
  }
}));
export default function Pictures(props) {
  const classes = useStyles();
  
    return(
      <div className={classes.root}>
        
        <div className={classes.text}>
          <h1 >{props.name}</h1>
            {props.description}
            {/* <a href={props.externallink} target="_blank"rel="noopener noreferrer">Click here</a> */}
        </div>
        <GridList cellHeight={650}className={classes.gridList} cols={1}>
          {props.link.map((tile) => (
            <GridListTile key={tile} cols={tile.cols || 1}>
                  <img src={tile} alt={tile}/>
            </GridListTile>
            
          ))}
        </GridList>
      </div>
    )
}

