import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Components/Projects';
import Contact from './Components/Contact ';


function App() {
  return (
    <div>
    <Header />
    <Navbar></Navbar>
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
