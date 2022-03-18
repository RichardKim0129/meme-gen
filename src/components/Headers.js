import React from "react";
import trollFace from "../images/troll.png";

const Headers = () => {
  return (
    <header className="header">
      <img className="header--image" src={trollFace} alt="troll" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project 3</h4>
    </header>
  );
};

export default Headers;
