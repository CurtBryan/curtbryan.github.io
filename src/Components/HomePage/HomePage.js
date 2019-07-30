import React, { Component } from "react";
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="projectBody">
        <div className="projectBox boxOne">
          <h1>Your Helping Hands</h1>

          <p>
            A meet-up like site, but with charities and charity events being the
            only focus. Made as a solo-project in two weeks time. I am very
            proud of the progress I made within two weeks for a social media app
            as a junior developer.
          </p>
          <a href="https://yourhelpinghandsphx.com/">Link is Here</a>
          <img className="websitePics" src="https://i.imgur.com/keQnem1.png" />
          <img className="websitePics" src="https://i.imgur.com/4ZszvO1.png" />
        </div>
        <div className="projectBox boxTwo">
          <h1>NOTA-POS</h1>

          <p>
            A point of sale system for restaurants with the employees and
            managers ease of use in mind. This project was done as group with
            two other junior developers in two weeks time, so this is the proof
            of concept, not a finished project just yet. My personal endeavor is
            to make the best P.O.S. system and for it to become the industry
            standard.
          </p>
          <a href="https://github.com/CurtBryan/nota-pos">Link is Here</a>
          <img className="websitePics" src="https://i.imgur.com/YQBHjQg.png" />
          <img className="websitePics" src="https://i.imgur.com/vO8zEVW.png" />
        </div>
      </div>
    );
  }
}

export default HomePage;
