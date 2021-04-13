
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
// import React, { Component }  from 'react';
import { toast } from "react-toastify";




const validation = () => {

    // const history = useHistory()

    const Submitsignup = (e) => {
        e.preventDefault();
        
        let idvendeur = localStorage.getItem("idvendeur");
     

            
           let password = document.getElementById("password").value
       
        axios.put(`http://localhost:8080/Vendeur/pass/${idvendeur}`, {password:password})
        .then(resp => {
            window.location.replace('http://localhost:3000/sign-in');  
            toast("Success! ", { type: "success" });  
            // history.push('/sign-in')  
               
        })
        .catch(err => {
            console.log(err);
        })
      
    }

    return ( 
        <div className="flex items-center justify-center">
        <div className="w-full max-w-md">

          <form onSubmit={Submitsignup} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            {/* @csrf */}
            <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            nouveau mot de passe
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">
                new Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="form.password" type="password" placeholder="Password" id="password" required autoComplete="current-password" />
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
              <a className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            ©2020 Gau Corp. All rights reserved.
          </p>
        </div>
      </div>
     );
}

export default validation;