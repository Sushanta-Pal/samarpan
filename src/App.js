import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Alumini from './components/Alumini/Alumini'
import Navbar from './components/Navbar/Navbar'


const App=()=> {
  return (
    <Router>
     <Navbar/>
      <Routes >
            <Route exact path='/' element = {<Home/>}/>
            <Route path='/alumini' element={<Alumini/>}/>
      </Routes>

    </Router>
  
  )
}

export default App