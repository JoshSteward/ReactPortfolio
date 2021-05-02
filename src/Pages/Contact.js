import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const App = () => (
    <div>
        <Header />
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Contact Details</h1>
          <p class="lead fw-normal" style="font-weight: bold;">Email: Stewardjosh10@gmail.com</p>
          <br>
          <p class="lead fw-normal" style="font-weight: bold;">Phone Number: 0418797177</p>
          <p class="lead fw-normal"style="font-weight: bold;">LinkedIn: </p>
          <a href = "https://www.linkedin.com/in/joshua-steward-1440511b2/">https://www.linkedin.com/in/joshua-steward-1440511b2/</a>
          <br>
          <p class="lead fw-normal" style="font-weight: bold;">Github: </p>
          <a href = "https://github.com/JoshSteward">https://github.com/JoshSteward</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
        <Footer />
    </div>
)