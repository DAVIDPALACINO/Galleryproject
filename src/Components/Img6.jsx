import React from 'react'
import img6 from '../Images/Img6.jpg'

const Img6 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={img6} alt="img.jpg" className="images"/>
    </div>
  );
}

export default Img6;