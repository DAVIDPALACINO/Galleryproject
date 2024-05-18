import './App.css';
import { BrowSerRouter as Router, Routes, Route } from 'react-router-dom';

import Img from './Components/Img';
import Img1 from './Componets/Img1';
import Img2 from './Componets/Img2';
import Img3 from './Componets/Img3';
import Img4 from './Components/Img4';
import Img5 from './Components/Img5';
import Img6 from './Components/Img6';
import Img7 from './Components/Img7';
import Img8 from './Components/Img8';
import Img9 from './Components/Img9';
import Img10 from './Componets/Img10';

import Navigation from './Components/Navigation';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Img' element={<Img/>} />
        <Route path='/Img1' element={<Img1/>} />
        <Route path='/Img2' element={<Img2/>} />
        <Route path='/Img3' element={<Img3/>} />
        <Route path='/Img4' element={<Img4/>} />
        <Route path='/Img5' element={<Img5/>} />
        <Route path='/Img6' element={<Img6/>} />
        <Route path='/Img7' element={<Img7/>} />
        <Route path='/Img8' element={<Img8/>} />
        <Route path='/Img9' element={<Img9/>} />
        <Route path='/Img10' element={<Img10/>} />
        <Navigation/>
      </Routes>
    </Router>

  );
}

export default App;
