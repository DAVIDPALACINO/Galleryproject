import React from 'react'
import img8 from '../Images/Img8.jpg'

const Img8 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={img8} alt="img.jpg" className="images"/>
    </div>
  );
}

export default Img8;