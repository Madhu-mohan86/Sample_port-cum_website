import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  View  from './home'
import Profile from './profile'
import  Menu from './Menu'
import Projects from './Projects';
import Certifications from './Certifications';
import Blogs from './Blogs';
import Services from './Services';
import Newsletters from './Newsletters';

function App() {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/profile' element ={<Profile/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Certifications' element={<Certifications/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Newsletters' element={<Newsletters/>}/>
        </Routes>
    </Router>
  )
}

export default App;

