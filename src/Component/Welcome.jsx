import React from "react";
import sandwich from "../images/sandwich.png";
import ChallengeTag from "./ChallengeTag";
import arrow from '../images/arrow.svg'
import Chapters from "./Chapters";

function Welcome() {
  return (
    <div className="container">
      <div className="left-col">
        <div className="welcome">
          <div className="welcome-header">
            <img src={sandwich} className="icon" alt="sandwich icon" />{" "}
            <h1>React Sandwich</h1>{" "}
          </div>
        </div>
        <div className="welcome">
          <div className="content">
            <div className="dom">Document</div>
          </div>

          <div className="content">
            <div className="dom"> &#60; HTML &#62;</div>
          </div>
          <div className="content">
            <div className="dom"> &#60; HEAD &#62;</div>
            <div className="dom blue-border "> &#60; BODY &#62;</div>
          </div>
          <div className="content">
            <div className="dom"> &#60; TITLE &#62;</div>
            <div className="dom"> &#60; H1 &#62;</div>
            <div className="dom"> &#60; SCRIPT &#62;</div>
          </div>
        </div>
      </div>
      {/* <div className="center">
        <img src={arrow} className="arrow-instruction" alt="arrow instruction" />{" "}
      </div> */}
      <div className="right-col">
        <div className="welcome">
          <div className="right-header">
            <ChallengeTag />
          </div>
        </div>
        <div className="right-content">
        <div className="welcome">

          <div className="content">
            <div className="btn-explain">
              <h2>React go in here: </h2>
              <h2>&#60;div&#62; id=”root”</h2>
            </div>
            </div>

            <h1 className="problems">To start, you can remove all  <br/>
            replace h1 to &#60;App&#47;&#62; component here</h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Welcome;
