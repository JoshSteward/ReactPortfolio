import React from 'react';

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
            
            <div class = "col-md-2">
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="index2.html">About <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="Contact.html">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;