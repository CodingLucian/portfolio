import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Resume from '../Resume/Resume.jsx';
import { Modal } from '../Modal/Modal';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';




export default function NavBar() {

  const [localModal, setLocalModal] = useState(false);
  const [localModalContact, setLocalModalContact] = useState(false);

  const handleResumeClick = function (e) {
    e.preventDefault();
    setLocalModal((prevState) => !prevState);
  };

  const handleClick = function (e) {
    // e.preventDefault();
    // setLocalModalContact((prevState) => !prevState);
    const target = document.getElementById(e.target.name);
    target.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.lnk}>
        <button className={styles.btn} onClick={(e)=>handleClick(e)} name="developer">
          Developer
        </button>
      </Link>
      <button className={styles.btn} onClick={(e)=>handleResumeClick(e)} name="resume">
        Resume
      </button>
      <button className={styles.btn} onClick={(e)=>handleClick(e)} name="contact">
        Contact
      </button>
      <button className={styles.btn} onClick={(e)=>handleClick(e)} name="about">
        About
      </button>
      {/* <Link to={'/photography'} className={styles.lnk}> */}
      <a href='https://www.eyeem.com/u/luciancristobal' target="_blanck" rel="noreferrer nofollow">
        <button className={styles.btn}>
          {/* <span className={styles.tachado}> */}Photography{/* </span> */}
        </button>
      </a> 
      {/* </Link> */}
      
      {/* ********************** agregar modo oscuro ****************** */}
      
      {/* <button className={styles.end}>
        <i className="bi bi-eye"></i>
      </button> */}
      
      {!!localModal && (
        <Modal setLocalModal={setLocalModal}>
          <Resume />
        </Modal>
      )}
      {!!localModalContact && (
        <Modal setLocalModal={setLocalModalContact} cancel="one">
          <Contact />
        </Modal>
      )}
    </div>
  )
}
