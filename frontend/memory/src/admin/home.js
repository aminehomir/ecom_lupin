import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import Nav from './nav';


// import React, { Component }  from 'react';



const Home = () => {
    
    const [allproducts , setallProducts] = useState();
    const [category ,setCategory] = useState();

   const idProduct = (id) => {

     localStorage.setItem("idproduit",id); 
     console.log(id);
    }

    useEffect(()=>{
    axios.get(`http://localhost:8080/Product/all`)
    .then(function (re) {
     
      // console.log(re.data)
       setallProducts(re.data)
    
    }).catch(function (err) {
      console.log(err);
  });


    

},[])
 

  

    return ( 
       
       <div>
        <Nav/>
<div className="last-products">
        <h2>Last added products</h2>
        <section className="products">
        {
          allproducts &&
          allproducts.map((allproducts) =>(
          <article key={allproducts._id}>
            <img src={allproducts.image} alt="" />
            <h4>${allproducts.name}</h4>
            <h4>${allproducts.price}</h4>
          
             <Link className="btn-add" to={"/product"}><button type="button" onClick={()=> idProduct(allproducts._id)} className="btnValidate">Add to cart</button></Link>
          </article>
            ))
        }
         
         
         
        </section>
      </div>


   
      
       </div>
		
       
  
     );
}

export default Home;