import React from 'react'
import styles from './Project.module.css'


export default function Project({txt, url, img, title, id, video/* , openModal */}) {
  let side = null;
  if(id%2===0){
    side = true;
  }else{
    side = false;
  }

  return (
    <>{
      side ? (
        <div className={styles.container}>
          <div className={styles.halfTxt}>
            <h1 className={styles.titleR}>{title}</h1>
            <div>
              {txt} <br/>
              Watch presentation video 
              <a href={video} target="_blank"> here </a>
            </div> 
          </div>
          <div className={styles.halfImg}>
            <a href={url} target="_blank">
              <img className={styles.img} src={img} alt='Imagen'/>
            </a>
          </div>
        </div> 
      ):(
        <div className={styles.container}>
          <div className={styles.halfImg}>
            <a href={url} target="_blank">
              <img className={styles.img} src={img} alt='Imagen'/>
            </a>
          </div>
          <div className={styles.halfTxt}>
            <h1 className={styles.titleL}>{title}</h1>
            <div>
              {txt} <br/>
              Watch presentation video 
              <a href={video} target="_blank"> here </a>
            </div>
          </div>
        </div> 
      ) 
    }</>
  )
}
