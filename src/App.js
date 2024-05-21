import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

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
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>GALLERY</h1>
       </div>
        <Routes>
          <Route path="/Img0" element={<Img0 className="image-size"/>}/>
          <Route path="/Img4" element={<Img4 className="image-size"/>}/>
          <Route path="/Img5" element={<Img5 className="image-size"/>}/>
          <Route path="/Img6" element={<Img6 className="image-size"/>}/>
          <Route path="/Img7" element={<Img7 className="image-size"/>}/>
          <Route path="/Img8" element={<Img8 className="image-size"/>}/>
          <Route path="/Img9" element={<Img9 className="image-size"/>}/>
        </Routes>
        <Navigation/>
    </Router>
    

  );
}

export default App;
