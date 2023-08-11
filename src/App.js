import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  View  from './pages/home'
import Profile from './pages/portfolio'
import  Menu from './pages/Menu'
import Blogs from './pages/Blogs';
import Services from './pages/Services';
import Newsletters from './pages/Newsletters';

function App() {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/profile' element ={<Profile/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Newsletters' element={<Newsletters/>}/>
        </Routes>
    </Router>
  )
}

export default App;

