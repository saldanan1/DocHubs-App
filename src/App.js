import React from 'react';
import Pictures from "./Pictures"
import HomePage from "./HomePage"
import './App.scss';
import { entries } from './EntriesData.js'
import { aboutme } from './AboutMeData.js'
import { homepagedata } from './HomePageData.js'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#FFFAFA",
    flexGrow: 1,
    marginTop: "5%",
    marginBottom: "5%"
  },
}));
const App = () =>{
  var documentData;
  try{
    documentData = JSON.parse(localStorage.getItem('tabSelection'))
  }
  catch{
    documentData = 0
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(documentData);

  const handleChange = (event, newValue) => {
    try{
      documentData = JSON.parse(localStorage.getItem('tabSelection'))
    }
    catch{
      documentData = 0
    }
    localStorage.setItem('tabSelection',JSON.stringify(newValue));
    setValue(newValue);
  };
    return (
          <Router>
              <div className="header">
              <Card className={classes.root}>
                <CardContent>
                  <Typography color="textPrimary">
                    <h1><strong>Hey, I'm Noah Saldaña</strong></h1>
                    iOS Developer - Student Mentor - Human-Centered Designer
                  </Typography>
                </CardContent>
                <CardContent>
                <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      centered
                    >
                      <Tab key={0} to='/' component={Link} label='Home'/>
                      <Tab key={1} to='/projects' component={Link} label='Projects'/>
                      <Tab key={2} to='/aboutme' component={Link} label='About Me'/>
                    </Tabs>
                </CardContent>
              </Card>
              </div>
            
            <Switch>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/aboutme">
                <AboutMePage />
              </Route>
              <Route path="/">
                <HomePageDirect />
              </Route>
            </Switch>
            
        </Router>        
    );
}
export default App;

function ProjectsPage() {
  return <div className="App">
  <header className="App-header">
    <div className="Pictures">
      {entries.map((entry)=>(
        <Pictures
        key = {entry.name}
        name = {entry.name}
        title = {entry.title}
        link = {entry.link}
        paragraph1 = {entry.paragraph1}
        paragraph2 = {entry.paragraph2}
        externallink = {entry.externallink}
        />
      ))}
    </div>
  </header>
  </div>;
}

function AboutMePage() {
  return <div className="App">
  <header className="App-header">
    <div className="Pictures">
      {aboutme.map((entry)=>(
        <Pictures
        key = {entry.name}
        name = {entry.name}
        title = {entry.title}
        link = {entry.link}
        paragraph1 = {entry.paragraph1}
        paragraph2 = {entry.paragraph2}
        externallink = {entry.externallink}
        />
      ))}
    </div>
  </header>
  </div>;
}

function HomePageDirect() {
  return <div className = "App">
    <header className="App-header">
      <div className="Pictures">
      {homepagedata.map((entry)=>(
        <HomePage
        key = {entry.title}
        name = {entry.title}
        description  = {entry.description}
        />
      ))}
      </div>
    </header>
  </div>
}
