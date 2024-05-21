import React from 'react'
import img5 from '../Images/Img5.jpeg'

const Img5 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={img5} alt="img.jpeg" className="images"/>
    </div>
  );
}

export default Img5;