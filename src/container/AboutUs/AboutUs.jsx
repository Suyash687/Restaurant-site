import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus flex__center section__padding app__bg" id="aboutus">
    <div className="app__aboutus_overlay">
      <img src={images.G} alt="g letter" />
    </div>

   <div className="app__aboutus-content flex__center">
   <div className="app__aboutus-content-about">
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} className="spoon__img" alt="" />
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus dolorem fuga, tempore at neque.</p>
      <button className="custom__button">Know more</button>
    </div>
    <div className="app__aboutus-content-knife">
      <img src={images.knife}  alt="" />
    </div>
    <div className="app__aboutus-content-history">
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} className="spoon__img" alt="" />
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus dolorem fuga, tempore at neque.</p>
      <button className="custom__button">Know more</button>
    </div>
   </div>
  </div>
);

export default AboutUs;
