import React from "react";
import "../styles/tugFilmsStyles.css";
import tug from "../images/tugFilms.png";

export default function TugFilm() {
  return (
    <div className="tugFilmsMainDiv">
      <div className="bodyAndPicDiv">
        <h1>Tug Films</h1>
        <div className="picDiv">
          <img className="pic" src={tug} />
        </div>
        <div className="bodyDiv">
          <p>
            "Tug Films" is a front-end React website that is currently a work in
            progress for a client. This website will serve as my clients
            personal portfolio for his wedding videography business. The site
            features a looping MP4 video playing in the background of the header
            that was taken by my client. The site also features price cards that
            get mapped over an array of price data provided by my client.
            Finally, the contact page is completely functional and will send my
            client emails by use of "FormSubmit" endpoint.
          </p>
          <p className="links">
            Website:{" "}
            <a href="https://www.tugfilms.com/" target="blank">
              tugfilms.com
            </a>
          </p>
          <p className="links">
            GitHub:{" "}
            <a href="https://github.com/ZakOpry/aaronsPortfolio" target="blank">
              TugFilms/GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
