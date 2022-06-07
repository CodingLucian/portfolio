import React from 'react';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <h1>Resume</h1>
      <div> 
          Full Stack Developer with design formation. Experience working with NodeJS, React, Redux, SQL among
          other related technologies. I worked on the frontend part of a team for the creation of an app for hostel
          booking and management.
      </div>
      <div>
        <h2>TECHNOLOGIES</h2>
        HTML, CSS, Javascript, React, Redux, Node.js, Express, TypeScript, Illustrator, Photoshop, Adobe
        premiere, Adobe After Effects, Scrum.
      </div>
      <div>
        <h2>PROJECTS</h2>
        <h3>Front End Developer - SoyHostel App - april. 2022.</h3> 
        <ul className={styles.txtLeft}>
          <li>
            Design and development of an App for hostels including: Login, register, client interface for
            learning about the hostel and booking. Reception interface to manage all bookings.
          </li>
          <li>
            The App was developed using React, javascript, CSS, Node, Express, PostgreSQL and
            Sequelize.
          </li>
        </ul> 
      </div>
      <div>
        <h3>Full Stack Developer - Countries App - march 2022</h3>
        <ul className={styles.txtLeft}>
          <li>
            Design and development of a simple app from scratch Frontend, Backend and database
          </li>
          <li>
            The App was developed using React, Redux, javascript, CSS, Node, Express, PostgreSQL and
            Sequelize.
          </li>
        </ul>
      </div>
      <div>
        <h2>
          PROFESSIONAL EXPERIENCE
        </h2>
        <h3>
          Full Stack Teaching Assistant - Henry Bootcamp - march to may 2022
        </h3> 
        <ul className={styles.txtLeft}>
          <li>
            Bootcamp Assistant (TA) for Full-Stack Development Students.
          </li>
          <li>
            Coordinate a group of students to achieve integration with the study group.
          </li>
          <li>
            Guide students in the first steps of the course.
          </li>
          <li>
            Assistance to solve exercises and promote group collaboration (Pair Programming).
          </li>
          <li>
            Propose ideas to improve the Bootcamp processes
          </li>
        </ul>
        <br />
        <h3>
          IT Support Technician - Sitec srl - january to november 2006
        </h3>
        <ul className={styles.txtLeft}>
          <li>
            Network, server and terminal maintenance.
          </li>
          <li>
            User support and teamwork.
          </li>
        </ul>
        <br />
        <h3>
          Freelance Video Editor & VFX Artist
        </h3>
        <ul className={styles.txtLeft}>
          <li>
            I worked remotely as a video editor and visual effects artist for different clients.
          </li>
          <li>
            Video edition / motion graphics / digitalization and synchronization / photographic
            retouching / other related tasks
          </li>
          You can check my personal Reel <a href="https://www.youtube.com/watch?v=7lspjjVF82E" target="_blanck" rel="noreferrer nofollow">here</a> 
        </ul>
        <br />
        <h3>
          Team Assistant - University of Georgia - 2010 to 2019
        </h3>
        <ul className={styles.txtLeft}>
          <li>
            Responsable of scheduling, organizing and coordinating groups of exchange students
          </li>
          <li>
            Assisting on transportation, local activities, trips within the country, weekly meetings and group
            lunch
          </li>
          <li>
            Management of program funds
          </li>
        </ul>
      </div>
      <div>
        <h2>
          PROFESSIONAL EDUCATION
        </h2>
        <ul className={styles.txtLeft}>
          <li>
            Full Stack Web Developer. Henry Bootcamp. 700 hours of technical-practical lessons. 2022 - <a href="https://certificates.soyhenry.com/cert?id=1eb3b5a3-8593-4bf7-ab5b-aefb88b2c9f8" target="_blanck" rel="noreferrer nofollow">Certificate</a> 
          </li>
          <li>
            Computer Engineering, University of Belgrano, Buenos Aires,. 2001 - 2003.
          </li>
          <li>
            MultiMedia Design, DaVinci School, Buenos Aires, 2005.
          </li>
        </ul>
      </div>
      <div>
        <h2>
          LANGUAGES
        </h2>
        <ul className={styles.txtLeft}>
          <li>
            English C2 - <a href="https://www.efset.org/cert/91NWSe" target="_blanck" rel="noreferrer nofollow">Certificate</a> 
          </li>
          <li>
            Spanish - Native
          </li>
          <li>
            Italian B2
          </li>
        </ul>
      </div>
    </div>
  )
}
