
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import React, { Component }  from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';



const signup = () => {
    const Submitsignup = (e) => {
        e.preventDefault();
        let adminToken = localStorage.getItem("tokenadmin");
        let request = {
            full_name: document.getElementById("fullname").value,
           
            email: document.getElementById("email").value,
          
            password: document.getElementById("password").value
        }
        axios.post('http://localhost:8080/Admin/add', request,{
          headers: {
            'Authorization': `Bearer ${adminToken}` 
          }})
        .then(resp => {
            alert(resp.data.message); 
            window.location.replace('http://localhost:3000/sign-in');       
        })
        .catch(err => {
            console.log(err);
        })
    }

    return ( 
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <form onSubmit={Submitsignup}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Full name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Full name" />
            </div>

            <div className="form-group">
                <label>email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>
            <MDBBtn color="indigo" type="submit">Sign Up</MDBBtn>
            
         
        </form>
       
        </MDBCol>
        </MDBRow>
      </MDBContainer>
     );
}

export default signup;