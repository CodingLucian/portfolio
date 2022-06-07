import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Resume from '../Resume/Resume.jsx';
import { Modal } from '../Modal/Modal';



export default function NavBar() {

  const [localModal, setLocalModal] = useState(false);

  const handleClick = (e) => {
    // const target = document.getElementById(e.target.name);
    // target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = function (e) {
    e.preventDefault();
    setLocalModal((prevState) => !prevState);
  };


  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={(e)=>handleResumeClick(e)} name="resume">
        Resume
      </button>
      <button className={styles.btn} onClick={handleClick} name="contact">
        Contact me
      </button>
      <button className={styles.btn} onClick={handleClick} name="who">
        Lucian
      </button>
      {!!localModal && (
          <Modal setLocalModal={setLocalModal}>
            <Resume />
          </Modal>
        )}
    </div>
  )
}
