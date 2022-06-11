import styles from './App.module.css';
import Contact from './components/Contact/Contact';
import infoCarousel from './data/carousel.json';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Slider from './components/Slider/Slider';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Photography from './components/Photography/Photography';

const carousel = infoCarousel;

function App() {
  return (
    // <div className={styles.bg}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/photography" element={<Photography/>} />
      </Routes>
    </HashRouter>
        // <Slider/>
    // </div>
  );
}

export default App;
