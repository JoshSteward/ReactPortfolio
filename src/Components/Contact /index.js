import React from 'react';
import "./style.css";

function Contact() {
    return(
    <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Contact Details</h1>
          <p class="lead fw-normal" >Email: Stewardjosh10@gmail.com</p>
          <br></br>
          <p class="lead fw-normal" >Phone Number: 0418797177</p>
          <p class="lead fw-normal">LinkedIn: </p>
          <a href = "https://www.linkedin.com/in/joshua-steward-1440511b2/">https://www.linkedin.com/in/joshua-steward-1440511b2/</a>
          <br></br>
          <p class="lead fw-normal" >Github: </p>
          <a href = "https://github.com/JoshSteward">https://github.com/JoshSteward</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
    );
}
export default Contact; 