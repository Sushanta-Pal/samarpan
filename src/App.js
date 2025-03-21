import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Alumini from './components/Alumini/Alumini';
import Navbar from './components/Navbar/OffcanvasExample';
import CarouselComponent from './components/Events/CarouselComponent';
import Card from './components/Events/Card';
import Footer from './components/Footer/Footer';
import Members from './components/Members/member'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alumini' element={<Alumini />} />
        <Route path='/events' element={<Card />} />
        <Route path='/members' element={<Members />} />
        <Route path='/carousel' element={<CarouselComponent />} /> 
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
