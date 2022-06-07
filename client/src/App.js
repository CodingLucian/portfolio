import styles from './App.module.css';
// import Resume from './components/Resume/Resume';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
// import SoyHostel from './components/SoyHostel/SoyHostel';


function App() {
  return (
    <div className={styles.bg}>
      <NavBar/>
      <Header/>
      <Projects/>
      {/* <Resume/> */}
      {/* <SoyHostel/> */}
    </div>
  );
}

export default App;
