import React from 'react';
import './HomePage.css';
import { makeStyles } from '@material-ui/core/styles';
import { homepagedata } from './HomePageData'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  root:{
    width: '100%',
  },
  rootBlue: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: "#e8f1f5",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  rootWhite: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: "#FAFAFA",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  gridList: {
    width: 600,
    height: 750,
    float: "right"
  },
  text:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    fontWeight: 'bold'
  },
  pictures:{
    width: 500,
    height: 500
  },
  sectionHeader:{
    backgroundColor: "#e8f1f5"
  }
}));
export default function HomePage(props) {
  const classes = useStyles(); 
    return(
      <div className={classes.root}>
        <div className={classes.rootBlue}>
          {/* <GridList cellHeight={300}className={classes.gridList} cols={1}>
              <GridListTile key={"text-about-me"} cols={1 || 1}>
              {homepagedata.map((tile) => (
                  <div className={classes.text}>{tile.title}</div>
              ))}
              </GridListTile>
          </GridList> */}
          <section className={classes.sectionHeader}>
            <section className={classes.sectionHeader}>
              <img className={classes.pictures} src={"https://noahsaldanadesign.com/img/IMG_3958.jpg"} alt={""}/>
            </section>
          </section>
        </div>
        <div className={classes.rootWhite}>
          <section className={classes.sectionHeader}>
            <section className={classes.sectionHeader}>
              <img className={classes.pictures} src={"https://noahsaldanadesign.com/img/Others/IMG_3000.png"} alt={""}/>
            </section>
          </section>
        </div>
      </div>
    )
}

