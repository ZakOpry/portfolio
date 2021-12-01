import React from "react";
import lunar from "../images/lunarExchange.png";
import "../styles/lunarExchangeStyles.css";

export default function LunarExchange() {
  return (
    <div className="lunarExchangeDiv">
      <div className="LunarBodyAndPicDiv">
        <h1 className="lunarExchangeHeader">Lunar Exchange</h1>
        <div className="LEpicDiv">
          <img className="lunarPic" src={lunar} />
        </div>
        <div className="lunarExchangebodyDiv">
          <p>
            "Lunar Exchange" is a full-stack project in which my role was
            project manager. I led a team of 4 developers to finish out ambitous
            goals set for ourselves within the 2 week alloted time line. This
            project served as our Capstone site for the end of our coding
            bootcamp. I also contributed to the project by creating the
            functions that take data and send to the back end and fetch data
            from the back end and render on the front end. Lunar Exchange mimics
            a crypto currency trading site. The site allows the user to create
            an account and log in. Once in, the user can browse through cryptos
            and add to their portfolio. They also have the ability to delete
            crypto from their account and also update their account info. Future
            improvements to the site would be to incorporate graphs that show
            crypto price points.
          </p>

          <p className="links">
            Website:{" "}
            <a
              href="https://hopeful-mahavira-d5e74d.netlify.app/#/"
              target="blank"
            >
              Lunar Exchange
            </a>
          </p>
          <p className="links">
            GitHub:{" "}
            <a href="https://github.com/mattstr23/Capstone" target="blank">
              Lunar Exchange/GitHub
            </a>
          </p>
          <p className="links">
            Medium:{" "}
            <a
              href="https://medium.com/@MatthewValicoff/crypto-capstone-completion-e3f7b54edc71"
              target="blank"
            >
              Lunar Exchange/Medium
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
