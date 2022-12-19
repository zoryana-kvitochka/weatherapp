import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="m-1 p-2 bg-primary bg-gradient bg-opacity-25 rounded-2 w-100">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Choose your city"
              autoComplete="off"
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
