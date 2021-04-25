import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class = "row">
            <div class = "col-md-10">
                <a class="navbar-brand" href="#">Josh Steward</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            
            <div class = "col-md-2">
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/index.2">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact2">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Header;