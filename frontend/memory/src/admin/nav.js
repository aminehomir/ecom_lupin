import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useHistory } from "react-router-dom";


// import React, { Component }  from 'react';



const Nav = () => {
    
    
    const [category ,setCategory] = useState();
   
    useEffect(()=>{

  axios.get(`http://localhost:8080/Category/all`)
  .then(function (response) {
   
      console.log(response.data);
      setCategory(response.data)
  
  }).catch(function (err) {
    console.log(err);
});

},[]);
  

    return ( 
      <div>
      <header id="header">
      <div className="container">
        <a href id="logo" title="Diana’s jewelry">Diana’s jewelry</a>
        <div className="right-links">
          <ul>
            <li><a href="cart.html"><span className="ico-products" />3 </a></li>
            <li><a href="#"><span className="ico-account" />Account</a></li>
            <li><a href="#"><span className="ico-signout" />Sign out</a></li>
          </ul>
        </div>
      </div>
    </header>
  
    



      <nav id="menu">
      <div className="container">
        <div className="trigger"></div>
        <ul>
        {
               category &&
               category.map((category) =>(
          <li><a href="">{category.name}</a></li>
          ))
        }
       
          
        </ul>
      </div>
    
    </nav>

    </div>
      
		
       
  
     );
}

export default Nav;