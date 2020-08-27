import React from 'react';
import Pictures from "./Pictures"
import HomePage from "./HomePage"
import './App.css';
import { entries } from './EntriesData.js'
import { aboutme } from './AboutMeData.js'
import { homepagedata } from './HomePageData.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () =>{
    return (
          <Router>
              <section className = "Welcome-text">
                <h1><strong>Hey, I'm Noah Saldaña</strong></h1>
                <section className = "Welcome-sub">
                  <p>iOS Developer - Student Mentor - Human-Centered Designer</p>
                </section>
                <section className = "Nav">
                  <ul id="nav">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="">Etc</Link>
                    <Link to="">Etc</Link>
                    <Link to="">Etc</Link>
                  </ul>
                </section>
              </section>

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
    <section id = "Pictures">
      {entries.map((entry)=>(
        <Pictures
        key = {entry.name}
        name = {entry.name}
        link = {entry.link}
        description = {entry.description}
        externallink = {entry.externallink}
        />
      ))}
    </section>
  </header>
  </div>;
}

function AboutMePage() {
  return <div className="App">
  <header className="App-header">
    <section id = "Pictures">
      {aboutme.map((entry)=>(
        <Pictures
        key = {entry.name}
        name = {entry.name}
        link = {entry.link}
        description = {entry.description}
        externallink = {entry.externallink}
        />
      ))}
    </section>
  </header>
  </div>;
}

function HomePageDirect() {
  return <div className = "App">
    <header className="App-header">
      <section id = "Pictures">
      {homepagedata.map((entry)=>(
        <HomePage
        key = {entry.title}
        name = {entry.title}
        description  = {entry.description}
        />
      ))}
      </section>
    </header>
  </div>
}
