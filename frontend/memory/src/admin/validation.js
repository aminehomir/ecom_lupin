
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import React, { Component }  from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';



const validation = () => {
    const Submitsignup = (e) => {
        e.preventDefault();
        let idadmin = localStorage.getItem("idadmin");
     

            
           let password = document.getElementById("password").value
       
        axios.put(`http://localhost:8080/Admin/${idadmin}`, {password:password})
        .then(resp => {
            alert(resp.data.message); 
            // window.location.replace('http://localhost:3000/sign-in');       
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
            <h3>new password</h3>

           

            <div className="form-group">
                <label>new password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>
            <MDBBtn color="indigo" type="submit">Sign Up</MDBBtn>
            
         
        </form>
       
        </MDBCol>
        </MDBRow>
      </MDBContainer>
     );
}

export default validation;