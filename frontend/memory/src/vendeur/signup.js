
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { Form,} from "react-bootstrap";
import React, { useEffect, useState } from "react";







const Signup = () => { 

    const history = useHistory()
    const [Signup, setSignup] = useState("");

  const Submitsignup = (e) => {
        e.preventDefault();
        if (Signup === "vendeur"){
        
        let request = {
            full_name: document.getElementById("fullname").value,
            phone: document.getElementById("phone").value,
           
            email: document.getElementById("email").value,
          
            password: document.getElementById("password").value
        }
        axios.post('http://localhost:8080/Vendeur/add', request)
        .then(resp => {
        
            history.push('/sign-in');       
        })
        .catch(err => {
            console.log(err);
        })


    }else{

        let request = {
            full_name: document.getElementById("fullname").value,
            phone: document.getElementById("phone").value,
           
            email: document.getElementById("email").value,
          
            password: document.getElementById("password").value
        }
        axios.post('http://localhost:8080/Acheteur/add', request)
        .then(resp => {
        
            history.push('/sign-in');       
        })
        .catch(err => {
            console.log(err);
        })


    }
    }

    return ( 
 <div className="bg-grey-lighter min-h-screen flex flex-col">
  <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div  className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <form onSubmit={Submitsignup}>
      <h1 className="mb-8 text-3xl text-center">Sign up</h1>
      <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" id="fullname" placeholder="Full Name" />
      <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" id="email" placeholder="Email" />
      <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" id="phone" placeholder="phone" />
      <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" id="password" placeholder="Password" />
      
      <Form.Check style={{marginBottom: '18px', marginRight: '20px', display: 'flex'}} type="radio" label="je suis vendeur" id="vendeur" name="vendeur" value="vendeur" 
            onChange={(e) => setSignup(e.target.value)}></Form.Check>  
        
      <button type="submit" className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700">Create Account</button>
      </form>
    </div>
   
  </div>
</div> 


     );
}

export default Signup;