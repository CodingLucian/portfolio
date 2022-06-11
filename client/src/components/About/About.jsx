import React from 'react';
import styles from './About.module.css';
import yo from '../../images/photos/yo.jpg'


export default function About() {
  return (
    <div id='about' className={styles.container}>
      <p className={styles.title}>
        About me
      </p>
      <div className={styles.row}>
        <img src={yo} alt='yo' className={styles.yo}/>
        <p className={styles.txt}>
          Hi, I´m Lucian, Full Stack Developer from Argentina, but at the same time I´m much more than that. I believe that because of my history I can bring to any team a unique perspective. During the last 10 years I traveled to 14 countries, volunteering and working in very different things. Getting to know all of those cultures and ways of doing things gave me a wider understanding of people and the ability to adjust to new environments and teams.
        If you ask me what am I? There's no a simple and short answer. I have been an IT support guy, a video editor, a VFX artist, a team assistent for exchange students. I did surveys, worked as hostel manager, became a dive master. I was also a farmer and a guitar player but mostly I would say, I'm traveling through life in my own way, just don't put a tag on me.
        I became a full stack developer with an intensive course at SoyHenry academy where I had more than 800hs of lessons and practices.
        At the moment I'm immersed full-time on strengthening my capabilities and adding more technologies to my skill set. 
        </p>
      </div>
    </div>
  ) 
}
