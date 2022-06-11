import React from 'react';
import styles from './Slider.module.css';
import img01 from '../../images/photos/01.JPG';
import img02 from '../../images/photos/02.JPG';
import img03 from '../../images/photos/03.JPG';


export default function Slider() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img01} class="d-block w-10" alt="img01"/>
        </div>
        <div class="carousel-item">
          <img src={img03} class="d-block w-10" alt="img02"/>
        </div>
        <div class="carousel-item">
          <img src={img02} class="d-block w-10" alt="img03"/>
        </div>
      </div>
    </div>
  )
}
