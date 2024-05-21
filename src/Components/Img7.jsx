import React from 'react'
import img7 from '../Images/Img7.jpg'

const Img7 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={img7} alt="img.jpg" className="images"/>
    </div>
  );
}

export default Img7;