import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from "./Routes/Home";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/details' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/*' element={<h5>La ruta no es correcta</h5>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
