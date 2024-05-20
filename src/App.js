import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Img0 from './Components/Img0';
import Img4 from './Components/Img4';
import Img5 from './Components/Img5';
import Img6 from './Components/Img6';
import Img7 from './Components/Img7';
import Img8 from './Components/Img8';
import Img9 from './Components/Img9';

import Navigation from './Components/Navigation';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/Img0' element={<Img0/>}        />
          <Route path='/Img4' element={<Img4/>}        />
          <Route path='/Img5' element={<Img5/>}        />
          <Route path='/Img6' element={<Img6/>}        />
          <Route path='/Img7' element={<Img7/>}        />
          <Route path='/Img8' element={<Img8/>}        />
          <Route path='/Img9' element={<Img9/>}        />
        </Routes>
        <Navigation/>
    </BrowserRouter>
    

  );
}

export default App;
