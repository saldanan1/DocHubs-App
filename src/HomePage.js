import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((themes) => ({
  root: {
  },
  rowContent:{
    flexDirection: "row",
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  largePicture:{
    width: "100%",
    height: "100%"
  },
  text:{
    fontSize: "calc(10px + 2vmin)",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    fontFamily: "sans-serif",
  },
  button:{
    width: "100%"
  },
  progress:{
   margin: "5%"
  },
  progressText:{
    fontSize: "calc(10px + 2vmin)",
    fontFamily: "sans-serif",
  },
  progressTitle:{
    fontSize: "calc(12px + 2vmin)",
    fontFamily: "sans-serif",
    textAlign: "center",
    fontWeight: "bold",
  },
  profilePictureCard:{
    width: "90%",
    backgroundColor: "#FFAFA",
    margin: "5%"
  },
  progressCard:{
    // [theme.breakpoints.down('xs')]: {
    //   width: "100%",
    // },
    // [theme.breakpoints.up('sm')]: {
    //   width: "80%",
    // },
    // [theme.breakpoints.up('md')]: {
    //   width: "80%",
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width: "100%",
    // },
    width: "90%",
    margin: "5%",
    backgroundColor: "#FFAFA",
  },
  Grid:{
    width: "50%"
  },
  socialCard:{
    width: "40%",
    marginLeft: "30%",
    margin: "5%",
    backgroundColor: "#FFAFA",
  }
}));
export default function HomePage(props) {
  const classes = useStyles(); 
    return(
      <Grow in={true} timeout={1000}>
          <div className={classes.root}>
          <Grid container spacing={3}>
              <Grid className={classes.Grid}>
                <Card className={classes.profilePictureCard}>
                  <CardContent>
                    <img className={classes.largePicture} src={"https://noahsaldanadesign.com/img/IMG_3958.jpg"} alt={""}/>
                    <div className={classes.text}>
                      <Typography>
                      <h2>Hello and welcome to my portfolio!</h2> 
                        <p>A congregation of my experiences and thoughts. 
                        I'm a graduate from Washington University in St. Louis with a BS in Computer Science.
                        I bring a unique role to every team I am apart of: having technical experience from a Computer Science degree, 
                        but also having the human centered design and creative problem solving experience gained from my work. 
                        HCD and creative problem solving have been a key portion of my education and experiences.
                        My goal is to cater to user experience and accessibility above all else.</p>
                        </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.Grid}>
                <Grid>
                  <Card className={classes.progressCard}>
                    <CardContent>
                      <div className={classes.progress}>
                      <div className={classes.progressTitle}>Languages</div>
                        <div className={classes.progressText}>Node.JS</div>
                        <LinearProgress className={classes.progress} variant="determinate" value={90} />
                      </div>
                      <div className={classes.progress}>
                        <div className={classes.progressText}>Swift</div>
                        <LinearProgress className={classes.progress} variant="determinate" value={80} />
                      </div>
                      <div className={classes.progress}>
                        <div className={classes.progressText}>React</div>
                        <LinearProgress className={classes.progress} variant="determinate" value={75} />
                      </div>
                      <div className={classes.progress}>
                        <div className={classes.progressText}>Javascript</div>
                        <LinearProgress className={classes.progress} variant="determinate" value={65} />
                      </div>
                      <div className={classes.progress}>
                        <div className={classes.progressText}>C#</div>
                        <LinearProgress className={classes.progress} variant="determinate" value={50} />
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                {/* <Grid>
                  <Card className={classes.progressCard}>
                    <CardContent>
                        <div className={classes.progressTitle}>Contact Me</div>
                    </CardContent>
                    <Card className={classes.socialCard}>
                        <Button className={classes.button} href={'https://www.linkedin.com/in/noahsaldana/'} target="_blank"rel="noopener noreferrer" size="medium" variant="outlined">LinkedIn</Button>
                      </Card>
                      <Card variant="outlined" className={classes.socialCard}>
                        <Button className={classes.button} href={'https://github.com/saldanan1'} target="_blank"rel="noopener noreferrer" size="medium" variant="outlined">GitHub</Button>
                      </Card>
                      <Card variant="outlined" className={classes.socialCard}>
                        <Button className={classes.button} href={'https://www.linkedin.com/in/noahsaldana/'} target="_blank"rel="noopener noreferrer" size="medium" variant="outlined">Email</Button>
                      </Card>
                  </Card>
                </Grid> */}
              </Grid>
          </Grid>
          </div>
      </Grow>
    )
}

