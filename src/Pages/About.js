import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const App = () => (
    <div> 
        <Header />
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">Josh Steward</h1>
      <p class="lead fw-normal">Web Developer</p>
      <p class="lead fw-normal">Explore the page to launch one of my developed apps</p>
      <a class="btn btn-outline-secondary" href="Joshua-Steward-Resume copy.docx">Click to lauch resume</a>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style="width:50%;">
      <div class="my-3 py-3">
        <h2 class="display-5">Cryptocurrency Tracker</h2>
        <p class="lead">Create and track your cryptocurrency portfolio before investing your money</p>
        <a class="btn btn-outline-secondary" href="https://joshsteward.github.io/AwesomeCryptoTracker/">Click to launch</a>
      </div>
      <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
        <img src = "CryptoTracker.png" alt="Crypto Screenshot" style = "width:100%; height:100%">
      </div>
    </div>
    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style="width:50%;">
      <div class="my-3 p-3">
        <h2 class="display-5">Weather Dashboard</h2>
        <p class="lead">Check out the weather in any city before you visit with a 5 day forecast</p>
        <a class="btn btn-outline-secondary" href="https://joshsteward.github.io/WeatherDashboard/">Click to launch</a>
      </div>
      <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
      <img src="WeatherApp.png" alt="Weather App" style="width:100%; height:100%">
      </div>
    </div>
  </div>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal">Daily Planner</h1>
      <p class="lead fw-normal">Plan your day using the app below</p>
      <a class="btn btn-outline-secondary" href="https://joshsteward.github.io/DailyPlanner/">Click to lauch</a>
      <div class="bg-dark shadow-sm mx-auto" style="width: 100%; height: 300px; border-radius: 21px 21px 0 0;">
      <img src="https://user-images.githubusercontent.com/73278132/102457398-cf2c6f80-4096-11eb-9923-e7ff0dc8836a.gif" alt="Weather App" style="width:100%; height:100%; padding: 5px;">
    </div>
  </div>
  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style="width:50%;">
      <div class="my-3 py-3">
        <h2 class="display-5">Employee Tracker</h2>
        <p class="lead">Create and track your employees! Download the repo through the button below to use this node activated code</p>
        <a class="btn btn-outline-secondary" href="https://joshsteward.github.io/AwesomeCryptoTracker/">Click to launch</a>
      </div>
    </div>
    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style="width:50%;">
      <div class="my-3 p-3">
        <h2 class="display-5">Eat The Burger</h2>
        <p class="lead">Make and eat the burger! Download the repo through the button below to use this node activated code</p>
        <a class="btn btn-outline-secondary" href="https://github.com/JoshSteward/Employee-Tracker">Click to launch</a>
      </div>
      </div>
    </div>
  </div>
        <Footer />
    </div>
);

export default App;