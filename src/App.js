import Home from './pages/home';
import Contact from './pages/contact';
import Register from './pages/register';
import Sell from './pages/sell';
import "./assetscss/css/style.css";
import "./assetscss/css/register.css";
import "./assetscss/css/sell.css";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return(
    // <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/sell' element={<Sell />} />

        </Routes>
      </BrowserRouter>
  //  <Home />;
  //  <Contact />;
  //  </div>
  );
}

export default App;
