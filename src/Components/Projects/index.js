import React from 'react';
import CryptoPic from "./CryptoTracker.png"
import "./projects.css";

function Projects() {
    return(
        <div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">Daily Planner</h1>
                    <p class="lead fw-normal">Plan your day using the app below</p>
                    <a class="btn btn-outline-secondary" href="https://joshsteward.github.io/DailyPlanner/">Click to lauch</a>
                    <div class="bg-dark shadow-sm mx-auto">
                    <img src="https://user-images.githubusercontent.com/73278132/102457398-cf2c6f80-4096-11eb-9923-e7ff0dc8836a.gif" alt="Weather App"></img>
                    </div>
                </div>
            </div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">Cryptocurrency Trakcer</h1>
                    <p class="lead fw-normal">Create a crpyto portfolio and track your returns</p>
                    <a class="btn btn-outline-secondary" href="https://joshsteward.github.io/AwesomeCryptoTracker/">Click to lauch</a>
                    <div class="bg-dark shadow-sm mx-auto">
                    <img class="pic" src={CryptoPic} alt="Cryto Tracker"></img>
                    </div>
                </div>
            </div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">Eat the burger</h1>
                    <p class="lead fw-normal">Create and Eat the burger using this application</p>
                    <a class="btn btn-outline-secondary" href="https://github.com/JoshSteward/EatBurger">Click to lauch</a>
                    <div class="bg-dark shadow-sm mx-auto">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;