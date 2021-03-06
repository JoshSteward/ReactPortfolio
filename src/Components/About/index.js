import React from "react";
import Resume from "./Joshua-Steward-Resume copy.docx";
 

function About() {
    return( 
    <div>
        <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Josh Steward</h1>
        <p class="lead fw-normal">Web Developer</p>
        <p class="lead fw-normal">Explore the page to launch one of my developed apps</p>
        <a download class="btn btn-outline-secondary" href={Resume} >Click to launch resume</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    )
}

export default About; 
