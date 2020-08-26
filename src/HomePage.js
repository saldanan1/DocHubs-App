import React from 'react';
import './HomePage.css';
import { makeStyles } from '@material-ui/core/styles';

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
  text:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    fontFamily: "serif",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
}));
export default function HomePage(props) {
  const classes = useStyles(); 
    return(
      <div className={classes.root}>
        <div className={classes.rootBlue}>
          <section className={classes.sectionHeader}>
            <section className={classes.sectionHeader}>
              <img className={classes.pictures} src={"https://noahsaldanadesign.com/img/IMG_3958.jpg"} alt={""}/>
            </section>
          </section>
        </div>
        <div className={classes.rootWhite}>
          <section className={classes.sectionHeader}>
            <section className={classes.sectionHeader}>
              <div className={classes.text}>
              Hello and welcome to my portfolio! A congregation of my experiences and thoughts. I'm a graduate from Washington University in St. Louis with a BS in Computer Science. 
              I bring a unique role to every team I am apart of: having technical experience from a Computer Science degree, 
              but also having the human centered design and creative problem solving experience gained from my work. 
              HCD and creative problem solving have been a key portion of my education and experiences.
              My goal is to cater to user experience and accessibility above all else.
              </div>
            </section>
          </section>
        </div>
        <div className={classes.rootBlue}>
          <section className={classes.sectionHeader}>
            <section className={classes.sectionHeader}>
              <img className={classes.pictures} src={"https://noahsaldanadesign.com/img/Others/IMG_3000.png"} alt={""}/>
            </section>
          </section>
        </div>
        {/* <section>
              <Graph />
            </section> */}
      </div>
    )
}

