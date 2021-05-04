import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import Contact from './Components/Contact ';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';


function App() {
  return (
    <div>
    <Header />
    <Navbar></Navbar>
    <About />
    <Router>
      <Switch>
        <Route exact path="/" component={Projects}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
      </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
