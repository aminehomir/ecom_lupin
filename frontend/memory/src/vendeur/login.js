
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { Form,} from "react-bootstrap";


// import React, { Component }  from 'react';



const Login = () => {
    const history = useHistory()
    const [Login, setLogin] = useState("");
  
    const Submit = (e) => {
        e.preventDefault();
        if (Login === "vendeur"){
            let requests = {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            }
            axios.post('http://localhost:8080/Vendeur/login', requests)
            .then(res => {
             
                    // console.log(res);
                    let tokenvendeur= res.data.token;
                    let idvendeur= res.data.id;
                    let is_valid= res.data.is_valid;
                    let first_login= res.data.first_login;
                    console.log(is_valid);  
             
                    localStorage.setItem("tokenvendeur", tokenvendeur); 
                    localStorage.setItem("idvendeur",idvendeur); 
        
                  if(is_valid==true){
                      
                    if(first_login==false){
                        history.push('/Newpass')  
                    }else{
                        history.push('/Dashboard')
                  
                    }
        
                }else{
                    toast("Votre compte n'est pas encore activé", { type: "error" });
                }
                      
            })
    
        }else{
             
            let requests = {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            }
            axios.post('http://localhost:8080/Acheteur/login', requests)
            .then(res => {
             
                    // console.log(res);
                    let tokenacheteur= res.data.token;
                    let idacheteur= res.data.id;
                    let is_valid= res.data.is_valid;
                    console.log(idacheteur);  
             
                    localStorage.setItem("tokenvendeur", tokenacheteur); 
                    localStorage.setItem("idvendeur",idacheteur); 
        
                  if(is_valid==true){
                      
                    
                        history.push('/Home')
                  
                  
        
                }else{
                    toast("Votre compte n'est pas encore activé", { type: "error" });
                }
                      
            })
    
        }
    
       

    }

    return ( 
      
        <div className="flex items-center justify-center" style={{marginTop:'80px'}}>
  <div className="w-full max-w-md">
    <form  onSubmit={Submit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
      {/* @csrf */}
      <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
      Login
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" v-model="form.email" type="email" required autofocus placeholder="Email" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="form.password" type="password" placeholder="Password" id="password" required autoComplete="current-password" />
      </div>
      
      <div className="checkbox" style={{display: 'flex'}}>
         
            <Form.Check style={{marginBottom: '18px', marginRight: '20px', display: 'flex'}} type="radio" label="vendeur" id="vendeur" name="vendeur" value="vendeur" 
            onChange={(e) => setLogin(e.target.value)}></Form.Check>  
          
          </div>
        
      <div className="flex items-center justify-between">
        <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
       
        
      </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      ©2020 Gau Corp. All rights reserved.
    </p>
  </div>
</div>

  
     );
}

export default Login;