import React from "react";

function Chapter(props) {
  return (
    <div className="container">
      <div className="welcome">
        <div className="left-col">
          <div className="welcome-header">
            <h3>{props.id}</h3>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div className="welcome">
        <div className="right-content"></div>
      </div>
    </div>
  );
}

export default Chapter;
