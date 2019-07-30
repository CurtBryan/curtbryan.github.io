import React from "react";
import "./Header.css";
import dPad from "../../dPad.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="headerBody">
      <a href="https://www.linkedin.com/in/curt-bryan/">
        <img
          className="svgLinkLogos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1024px-Linkedin_icon.svg.png"
        />
      </a>
      <div className="controllerBody">
        <div className="darkControllerBody">
          <div className="leftSideCont">
            <img className="dPad" src={dPad} />
          </div>
          <div className="middleCont">
            <div className="grayBar1">
              {" "}
              <h1> Full-Stack Web Developer</h1>
            </div>
            <div className="grayBar2" />
            <div className="grayBarNavs">
              <h1>Projects</h1>
              <h1>Skills</h1>
            </div>
            <div className="buttonsCont">
              <NavLink
                style={{
                  height: "30%",
                  width: "30%",
                  backgroundColor: "black",
                  border: "none",
                  borderRadius: "10%"
                }}
                to="/"
              >
                <button className="navButton" />
              </NavLink>
              <NavLink
                style={{
                  height: "30%",
                  width: "30%",
                  backgroundColor: "black",
                  border: "none",
                  borderRadius: "10%"
                }}
                to="/Skills"
              >
                <button className="navButton" />
              </NavLink>
            </div>
            <div className="lastGrayBar" />
          </div>
          <div className="rightSideCont">
            <div className="nameButtonBox">
              <div className="nameLogo">
                <h1>Curt Bryan</h1>
              </div>
              <div className="buttonBoxCont">
                <div className="buttonBox">
                  <button className="redButton" />
                </div>
                <div className="buttonBox">
                  <button className="redButton" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/CurtBryan">
        <img
          className="svgLinkLogos"
          src="http://cse.msu.edu/~sydlikb1/assets/github.png"
        />
      </a>
    </header>
  );
}
export default Header;
