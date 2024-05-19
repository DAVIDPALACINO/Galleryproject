import React from 'react';
import {Link} from 'react-router-dom';

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
                <figure>
                       <img src={Img0} alt="" />
                       <figcaption>Img0</figcaption>
                </figure>
             </Link>    
             <Link to="/Img4">
                <figure>
                       <img src={Img4} alt="" />
                       <figcaption>Img4</figcaption>
                </figure>
             </Link>
             <Link to="/Img5">
                <figure>
                       <img src={Img5} alt="" />
                       <figcaption>Img5</figcaption>
                </figure>
             </Link>
             <Link to="/Img6">
                <figure>
                       <img src={Img6} alt="" />
                       <figcaption>Img6</figcaption>
                </figure>
             </Link>
             <Link to="/Img7">
                <figure>
                       <img src={Img7} alt="" />
                       <figcaption>Img7</figcaption>
                </figure>
             </Link>
             <Link to="/Img8">
                <figure>
                       <img src={Img8} alt="" />
                       <figcaption>Img8</figcaption>
                </figure>
             </Link>  
             <Link to="/Img9">
                <figure>
                       <img src={Img9} alt="" />
                       <figcaption>Img9</figcaption>
                </figure>
             </Link>       
        </div>

   )

}
   
      export default Navigation;