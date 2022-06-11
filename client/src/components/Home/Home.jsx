import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.bg}>
      <NavBar/>
      <Header/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  )
}
