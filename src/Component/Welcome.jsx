import React from "react";
import sandwich from "../images/sandwich.png";
import ChallengeTag from "./ChallengeTag";
import arrow from "../images/arrow.svg";

function Welcome() {
  return (
    <div className="container">
      <div className="left-col">
        <div className="welcome-header">
          <img src={sandwich} className="icon" alt="sandwich icon" />{" "}
          <h1>React Sandwich</h1>{" "}
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
          <div className="description">
            <h3>In Javascript, we normally do</h3>
            <code>
              const element = document.querySelector();
              <br />
              element.classList.add();
              <br />
              element.addEventListener();
            </code>
          </div>
        </div>
      </div>

      <div className="right-col">
        <div className="right-header">
          <ChallengeTag />
        </div>
        <div className="welcome">
          <div className="right-content">
            <div className="content">
              <div className="btn-explain">
                <h2>React Element </h2>
                <div className="sticky">
                  <img
                    src={arrow}
                    className="arrow-instruction"
                    alt="arrow instruction"
                  />{" "}
                </div>
              </div>
            </div>

            <h2>&#60;div&#62; id=”root”</h2>
            <h2 className="problems">
              To start, you can remove all replace h1 to <br />
              &#60;App&#47;&#62; component to the root
            </h2>
          </div>
          <div className="description" style={{ color: "#5D5FEF" }}>
            <h3>In React, we update the state</h3>
            <code style={{ whiteSpace: "pre" }}>
              &#60;div id="root"&#62;&#60;/div&#62; <br/><br/>
              const root = ReactDOM.createRoot( <br />{" "}
              document.getElementById('root')
              <br />
              );
              <br /><br />
              const element = <strong>Hello, world</strong>; <br />
              root.render(element);
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
