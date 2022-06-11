import React from 'react';
import styles from './Header.module.css';
import technologies from '../../data/technologies.json';

const icons = technologies;

export default function Header() {
  return (
    <div id='developer' className={styles.row}>
      <div className={styles.move}>
        <div className={styles.container}>
          <h1 className={styles.name}>Lucian Durietz</h1>
          <h2 className={styles.fullStack}>Full Stack Developer</h2>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.technologies}>Technologies</div>
          {
            icons.map((t)=>{
              return <img key={t} alt='imagen' className={styles.img} src={t}/>
            })
          }
        </div>
      </div>  
    </div>
    
  )
}
