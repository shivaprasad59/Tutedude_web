import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Link,Route,Routes} from 'react-router-dom'
import Refer from "./Refer";
import './App.css'
function Cards(){
 return(
    <div>
        <div >
        <div className="d-flex links2"> 
                <Link to="/x" className="links3"><b>UI/UX</b></Link>
                <span>{'>'}</span>
                <Link to="/Refer" className="links3"><b>Refer & Earn</b></Link>
                <span>{'>'}</span>
                <Link to="/y" className="links3"><b>Friends Referred</b></Link>
            </div>
        <div className='d-flex mt-5'>
         <div className='refrcode'>
            <b className="color">Your Referral Code</b>
             <h5 className='border rounded-4 p-3 mt-1 refcode text-center'>EDCH54</h5>
         </div>
         <div className='refrcode1 border rounded-4 ps-3 pe-3'>
             <b className=" color">Wallet Balance</b>
             <p className="mt-2 text-center">$500</p>
         </div>
    </div>
      <div className='cardtext'>
        <b className="color">Friends who Enrolled(3)</b>
      </div>
      <div className="d-flex row cardtot">
      <div className="card card1 col-sm-10 col-md-8 col-lg-3 text-light">
  <div className="card-body">
    <div className="d-flex">
       <b className="">Dhiraj Saxena</b>
       <p className="ms-auto">14 sep,2022</p>
    </div>
    <p>Courses Enrolled(6)</p>
    <div>
        <ul className="d-flex">
           <li className="border rounded-4 p-1">UI/UX</li>
           <li className="border rounded-4 ms-1 p-1">Photoshop</li>
           <li className="border rounded-4 ms-1 p-1">Illustrator</li>
        </ul>
    </div>
    <div>
        <ul className="d-flex ">
           <li className="border rounded-4 p-1">Python</li>
           <li className="border rounded-4 ms-1 p-1">MERN</li>
           <li className="border rounded-4 ms-1 p-1">JAVA</li>
        </ul>
    </div>
    <b>Referral Amount:$185</b>
    </div>
  </div>
  <div className="card card1 col-sm-10 col-md-8 col-lg-3 text-light">
  <div className="card-body">
    <div className="d-flex">
       <b className="">Dhiraj Saxena</b>
       <p className="ms-auto">14 sep,2022</p>
    </div>
    <p>Courses Enrolled(23)</p>
    <div>
        <ul className="d-flex ">
           <li className="border rounded-4 p-1">UI/UX</li>
           <li className="border rounded-4 ms-1 p-1">Photoshop</li>
           <li className="border rounded-4 ms-1 p-1">Illustrator</li>
        </ul>
    </div>
    <div>
        <ul className="d-flex ">
           <li className="border rounded-4 p-1">Python</li>
           <li className="border rounded-4 ms-1 p-1">MERN</li>
           <li className="border rounded-4 ms-1 p-1">JAVA</li>
           <li className="border rounded-4 ms-1 p-1">C++</li>
        </ul>
    </div>
    <b>Referral Amount:$485</b>
    </div>
  </div>
  <div className="card card1 col-sm-10 col-md-8 col-lg-3 text-light">
  <div className="card-body ">
    <div className="d-flex ">
       <b className="">Prafull Kumar</b>
       <p className="ms-auto">16 sep,2022</p>
    </div>
    <p>Courses Enrolled(26)</p>
    <div >
        <ul className="d-flex ">
           <li className="border rounded-4 p-1">UI/UX</li>
           <li className="border rounded-4 ms-1 p-1">Photoshop</li>
           <li className="border rounded-4 ms-1 p-1">Illustrator</li>
        </ul>
    </div>
    <div>
        <ul className="d-flex ">
           <li className="border rounded-4 p-1">Python</li>
           <li className="border rounded-4 ms-1 p-1">MERN</li>
           <li className="border rounded-4 ms-1 p-1">JAVA</li>
           <li className="border rounded-4 ms-1 p-1">C++</li>
        </ul>
    </div>
    <b>Referral Amount:$485</b>
    </div>
  </div>
  
    </div>
    
    </div>
    </div>
 );
}


export default Cards;
 