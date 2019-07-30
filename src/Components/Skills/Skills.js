import React, { Component } from "react";
import {
  DiMongodb,
  DiNodejsSmall,
  DiJsBadge,
  DiPostgresql,
  DiHeroku,
  DiGithub,
  DiFirebase,
  DiDigitalOcean,
  DiCss3,
  DiHtml5,
  DiBootstrap,
  DiVisualstudio,
  DiReact,
  DiNpm,
  DiGit
} from "react-icons/di";
import "./Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="firstCont">
          <section className="skillsCont">
            <div className="skillBox">
              <DiReact className="langLogo" />
              <h3>React</h3>
            </div>
            <div className="skillBox">
              <DiCss3 className="langLogo" />
              <h3>Css3</h3>
            </div>
            <div className="skillBox">
              <DiNodejsSmall className="langLogo" />
              <h3>Node.js</h3>
            </div>
            <div className="skillBox">
              <DiPostgresql className="langLogo" />
              <h3>PostgreSQL</h3>
            </div>
            <div className="skillBox">
              <DiMongodb className="langLogo" />
              <h3>MongoDB</h3>
            </div>
            <div className="skillBox">
              <DiGithub className="langLogo" />
              <h3>GitHub</h3>
            </div>
            <div className="skillBox">
              <DiGit className="langLogo" />
              <h3>Git</h3>
            </div>
            <div className="skillBox">
              <DiHtml5 className="langLogo" />
              <h3>Html5</h3>
            </div>
            <div className="skillBox">
              <DiBootstrap className="langLogo" />
              <h3>Bootstrap</h3>
            </div>
            <div className="skillBox">
              <DiDigitalOcean className="langLogo" />
              <h3>Digital Ocean</h3>
            </div>
            <div className="skillBox">
              <DiHeroku className="langLogo" />
              <h3>Heroku</h3>
            </div>
            <div className="skillBox">
              <DiJsBadge className="langLogo" />
              <h3>JavaScript</h3>
            </div>
            <div className="skillBox">
              <DiFirebase className="langLogo" />
              <h3>Firebase</h3>
            </div>
            <div className="skillBox">
              <DiVisualstudio className="langLogo" />
              <h3>VisualStudio</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Skills;
