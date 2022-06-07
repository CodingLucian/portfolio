import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Resume from '../Resume/Resume.jsx';
import { Modal } from '../Modal/Modal';
import Contact from '../Contact/Contact';



export default function NavBar() {

  const [localModal, setLocalModal] = useState(false);
  const [localModalContact, setLocalModalContact] = useState(false);

  const handleResumeClick = function (e) {
    e.preventDefault();
    setLocalModal((prevState) => !prevState);
  };

  const handleContactClick = function (e) {
    e.preventDefault();
    setLocalModalContact((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={(e)=>handleResumeClick(e)} name="resume">
        Resume
      </button>
      <button className={styles.btn} onClick={(e)=>handleContactClick(e)} name="contact">
        Contact me
      </button>
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
