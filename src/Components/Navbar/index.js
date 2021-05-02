import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class = "row">
            <div class = "col-md-10">
                <a class="navbar-brand" href="#">Josh Steward</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <Router>
            <div class = "col-md-2">
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/">Projects</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
            </Router>
        </div>
    </nav>
    );
}

export default Navbar;