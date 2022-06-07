import React/* , { useState } */ from 'react';
import Project from '../Project/Project';
import styles from './Projects.module.css';
import projectsData from '../../data/projects.json'
// import { Modal } from '../Modal/Modal';
// import SoyHostel from '../SoyHostel/SoyHostel';

export default function Projects() {
  let id = 10;
  // const [localModal, setLocalModal] = useState(false);

  // const openModal = () =>{
  //   setLocalModal((prevState) => !prevState);
  // }
  return (
    <div className={styles.container}>
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
