import React from 'react'
import img4 from '../Images/Img4.jpg'

const Img4 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={img4} alt="img.jpg" className="images"/>
    </div>
  );
}

export default Img4;
