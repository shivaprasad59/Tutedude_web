import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './Images/logo.png'
import profile from './Images/profile.png'
import './App.css'
import Card from './Cards.js'
import Refer from './Refer';
import {Route,Routes,Link} from 'react-router-dom';
function App() {
  return (
    
      <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
    
    <button className="navbar-toggler icon"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <h6 className='profname'>Profile</h6>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-2">
          <a className="nav-link color"href="#">My Assignment</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link color" href="#">Chat With Mentor</a>
        </li>
        <li className="mt-2 me-2">
        <span className="color"><img  className="profile me-1 "src={profile} alt="profile"/>ProfileName</span>
        </li>
      </ul>
    </div>
  </div>
</nav>

        
        </div>
        <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path='/Refer' element={<Refer/>}/>
            </Routes>
    <Link className="nav-link  Terms" to="/">Friends Who Enrolled</Link>
       <div className="Terms">
    <Link className="nav-link active" to="/">Terms & Conditions</Link>
    </div>
      </div>
      
  );
}

export default App;
