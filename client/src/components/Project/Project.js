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
            <p className={styles.titleR}>{title}</p>
            <div>
              {txt} <br/>
              Watch presentation video 
              <a href={video} target="_blank" className={styles.nodeco} rel="noreferrer nofollow"> here </a>
            </div> 
          </div>
          <div className={styles.halfImg}>
            <a href={url} target="_blank" rel="noreferrer nofollow">
              <img className={styles.img} src={img} alt='Imagen'/>
            </a>
          </div> 
        </div> 
      ):(
        <div className={styles.container}>
          <div className={styles.halfImg}>
            <a href={url} target="_blank" rel="noreferrer nofollow">
              <img className={styles.img} src={img} alt='Imagen'/>
            </a>
          </div>
          <div className={styles.halfTxt}>
            <p className={styles.titleL}>{title}</p>
            <div>
              {txt} <br/>
              Watch presentation video 
              <a href={video} target="_blank" className={styles.nodeco} rel="noreferrer nofollow"> here </a>
            </div>
          </div>
        </div> 
      ) 
    }</>
  )
}
