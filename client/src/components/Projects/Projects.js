import React from 'react';
import Project from '../Project/Project';
import styles from './Projects.module.css';
import projectsData from '../../data/projects.json'


export default function Projects() {
  let id = 10;
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.titlethin}>Samples of my work:</h1>
      {
        
        projectsData.map((p)=> {
          id++;
          return <Project 
            key={id}
            id={id}
            img={p.img}
            url={p.url}
            txt={p.txt}
            title={p.title}
            video={p.video}
            // openModal={openModal}
          />
        })
        
      }
      {/* {!!localModal && (
          <Modal setLocalModal={setLocalModal}>
            <SoyHostel/>
          </Modal>
        )} */}
        
    </div>
  )
}
