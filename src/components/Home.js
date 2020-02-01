import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Notes from "./Notes";
import Vacations from "./Vacations";
import Companies from "./Companies";
export default function Home() {
  return (
    <Router>
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <div className="circle-container">
          <div className="circle">
            <p>
              <Link to="/notes">
                <strong>Notes</strong>
              </Link>
              <br />
              You have {} notes.
            </p>
          </div>
          <div className="circle">
            <p>
              <Link to="/vacations">
                <strong>Vacations</strong>
              </Link>
              <br />
              You have {} vacations.
            </p>
          </div>

          <div className="circle">
            <p>
              <Link to="/companies">
                <strong>Following Companies</strong>
              </Link>
              <br />
              You are following {} companies
            </p>
          </div>
        </div>
        <Route exact path="/" components={Home} />
        <Route path="/notes" components={Notes} />
        <Route path="/vacations" components={Vacations} />
        <Route path="/companies" components={Companies} />
      </div>
    </Router>
  );
}
