import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./index.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container shadow-sm p-3 px-5 mt-5 bg-body rounded-2 bg-opacity-10">
        <Weather city="Kyiv" />
      </div>
      <footer>
        <a
          href="https://github.com/zoryana-kvitochka/weatherapp"
          target="_blank"
          className="footer-link"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Stanislava Dudchenko
      </footer>
    </div>
  );
}

export default App;
