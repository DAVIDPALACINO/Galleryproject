import React from 'react'
import img9 from '../Images/Img9.jpg' 

const Img9 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={img9} alt="img.jpg" className="images"/>
    </div>
  );
}

export default Img9;