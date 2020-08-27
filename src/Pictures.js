import React from 'react';
import './Pictures.css';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
    fontFamily: "sans-serif",

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
        <div>
          <h1><a href={props.externallink} target="_blank"rel="noopener noreferrer">{props.name}</a></h1>
        </div>
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

