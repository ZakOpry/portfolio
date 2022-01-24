import React from "react";
import "../styles/HamburgerNavBarStyles.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
export default function HamburgerNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="mainMobileNavBarDiv">
        <div className="menuDiv" onClick={() => setMenuOpen(!menuOpen)}>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <AiOutlineMenu />
          </IconContext.Provider>
        </div>
      </div>

      {menuOpen ? (
        <div className="dropDown">
          <Link className="link" to="/" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="navBarButton" id="home">
              <h3>About Me</h3>
            </div>
          </Link>
          <Link
            className="link"
            to="/projects"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="navBarButton" id="dropDownProjects">
              <h3>Projects</h3>
            </div>
          </Link>
          <Link
            className="link"
            to="/contact"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="navBarButton" id="dropDownContact">
              <h3>Contact</h3>
            </div>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
