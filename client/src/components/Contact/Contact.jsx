import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div>
      <div className={styles.info}>
        <p className={styles.title}>
          <span /* className={styles.titleStrong} */>CONTACT ME</span> 
        </p>

        <div className={styles.contactInfo}>
          <p>
            Location: Buenos Aires, Argentina
          </p>

          <div>
            
            
          </div>
        </div>
        <div className={styles.social}>
          <p>CONNECT WITH ME ON:</p>
          <div className={styles.socialContainer}>
            <a
              className={styles.link}
              target="_blank"
              href="https://wa.me/5491132858463?text=Hi%2C%20I%27m%20contacting%20you%20from%20your%20portfolio%20website..."
            >
              <i type="button" className="bi bi-whatsapp"></i>
            </a>
            <a
              href="mailto: luciano.durietz@gmail.com"
              className={styles.link}
            >
              <i className="bi bi-envelope"></i>
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="https://www.instagram.com/lavidaesunviajesisi/"
            >
              <i type="button" className="bi bi-instagram"></i>
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="https://www.facebook.com/luciancristobal/"
            >
              <i type="button" className="bi bi-facebook"></i>
            </a>
            <a
              href="tel: +54 (11) 3285 8463"
              className={styles.link}
            >
              <i className="bi bi-telephone"/>
            </a>
            {/* <a
              className={styles.link}
              target="_blank"
              href="https://twitter.com/Soyhostel/"
            >
              <i className="bi bi-twitter"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}
