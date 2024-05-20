import React from 'react';
import {Link} from 'react-router-dom';
import img0 from '../Images/Img0.jpg'
import img4 from '../Images/Img4.jpg'
import img5 from '../Images/Img5.jpeg'
import img6 from '../Images/Img6.jpg'
import img7 from '../Images/Img7.jpg'
import img8 from '../Images/Img8.jpg'
import img9 from '../Images/Img9.jpg' 
import Img0 from './Img0';
import Img4 from './Img4';
import Img5 from './Img5';
import Img6 from './Img6';
import Img7 from './Img7';
import Img8 from './Img8';
import Img9 from './Img9';


function Navigation() {
    return(
        <div>
             <Link to="/img0">
               <div className='box'>
               <div className='column'>
                  <figure>
                       <img src={Img0} alt="" />
                       <figcaption><img className='Gallery' src={img0} alt="jpg" /></figcaption>
                <figcaption>World Notebook</figcaption>
                </figure>
                </div>
               </div>                
             </Link>    
             <Link to="/Img4">
             <div className='box'>
             <div className='column'>
                <figure>
                       <img src={Img4} alt="" />
                       <figcaption><img className='Gallery'src={img4} alt="jpg" /></figcaption>
                <figcaption>Share</figcaption>
                </figure>
                </div>
               </div>
             </Link>
             <Link to="/Img5">
             <div className='box'>
             <div className='column'>
                <figure>
                       <img src={Img5} alt="" />
                       <figcaption><img className='Gallery'src={img5} alt="jpeg" /></figcaption>
                <figcaption>Desarrollo Web</figcaption>
                </figure>
                </div>
                </div>
             </Link>
             <Link to="/Img6">
             <div className='box'>
             <div className='column'>
                <figure>
                       <img src={Img6} alt="" />
                       <figcaption><img className='Gallery'src={img6} alt="jpg" /></figcaption>
                <figcaption>ciberseguridad</figcaption>
                </figure>
                </div>
                </div>
             </Link>
             <Link to="/Img7">
             <div className='box'>
             <div className='column'>
                <figure>
                       <img src={Img7} alt="" />
                       <figcaption><img className='Gallery'src={img7} alt="jpg" /></figcaption>
                 <figcaption>virus computer</figcaption>
                 </figure>
                 </div>
                 </div>
             </Link>
             <Link to="/Img8">
             <div className='box'>
             <div className='column'>
                <figure>
                       <img src={Img8} alt="" />
                       <figcaption><img className='Gallery'src={img8} alt="jpg" /></figcaption>
                <figcaption>Lost Computer</figcaption>
                </figure>
                </div>
                </div>
             </Link>  
             <Link to="/Img9">
             <div className='box'>
             <div className='column'>
                <figure>
                       <img src={Img9} alt="" />
                       <figcaption><img className='Gallery'src={img9} alt="jpg" /></figcaption>
                <figcaption>Hackers</figcaption>
                </figure>
                </div>
                </div>
             </Link>       
        </div>

   )

}
   
      export default Navigation;