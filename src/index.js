import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <h1>Kiora, today we are making react sandwich</h1>
    <h1 className='problems'>To start, you can remove all replace h1 to App component here</h1>
  </React.StrictMode>
);

reportWebVitals();