import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Booking from './components/pages/Booking';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dat-phong' element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
