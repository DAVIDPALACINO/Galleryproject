import React from 'react'
import img0 from '../Images/Img0.jpg'

const Img0 = ({ className }) => {
    return (
      <div className={`image-container ${className}`}>
        <img src={img0} alt="img.jpg" className="images"/>
      </div>
    );
  }
  
  export default Img0;