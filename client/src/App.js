import styles from './App.module.css';
import Contact from './components/Contact/Contact';
import infoCarousel from './data/carousel.json';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
// import Slider from './components/Slider/Slider';

const carousel = infoCarousel;

function App() {
  return (
    <div className={styles.bg}>
      <NavBar/>
      <Header/>
      <Projects/>
      {/* <Slider images={carousel}/> */}
      <Contact/>
      {/* <SoyHostel/> */}
    </div>
  );
}

export default App;
