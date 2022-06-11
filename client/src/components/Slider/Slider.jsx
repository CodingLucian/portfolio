import React from 'react';
import styles from './Slider.module.css';
import img01 from '../../images/photos/01.JPG';
import img02 from '../../images/photos/02.JPG';
import img03 from '../../images/photos/03.JPG';


export default function Slider() {
  return (
    <div className={styles.container}>
      <img src={img01} className={styles.photo} alt="img01"/>
      <span className={styles.workinprogres}>UNDER CONSTRUCTION</span>
    </div>
  )
}
