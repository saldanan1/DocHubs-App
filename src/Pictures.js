import React from 'react';
import './Pictures.css';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { homepagedata } from './HomePageData';

const useStyles = makeStyles((theme) => ({
  gridList: {
    height: 750,
    width: 1000
  },
  text:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 100,
    paddingTop: 200,
    width: "100%",
    backgroundColor: "#e8f1f5",
  },
  blue:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 100,
    paddingTop: 200,
    backgroundColor: "red"
  }
}));
export default function Pictures(props) {
  const classes = useStyles();
  
    return(
      
      <div className={classes.root}>
        <h1>{props.name}</h1>
        <GridList cellHeight={700}className={classes.gridList} cols={1}>
          {props.link.map((tile) => (
            <GridListTile key={tile} cols={tile.cols || 1}>
                  <img src={tile} alt={tile}/>
            </GridListTile>
          ))}
          <div className={classes.text}>{props.description}</div>
        </GridList>
        
      </div>
    )
}

