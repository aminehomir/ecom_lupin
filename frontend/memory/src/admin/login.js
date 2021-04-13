
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// import React, { Component }  from 'react';



const Login = () => {
    const history = useHistory()

    const Submit = (e) => {
        e.preventDefault();
    
    // let request = {
    //     email: document.getElementById("email").value,
    //     password: document.getElementById("password").value
    // }
    // axios.post('http://localhost:8080/Admin/login', request)
    // .then(res => {
     
    //         console.log(res);
    //         let tokenadmin= res.data.token;
    //         let idadmin= res.data.id;
    //         let is_valid= res.data.is_valid;
    //         console.log(tokenadmin);  
     
    //         localStorage.setItem("tokenadmin",tokenadmin); 
    //         localStorage.setItem("idadmin",idadmin); 
          
    //         if(is_valid==false){
    //             history.push('/valid')  
    //         }else{
    //             history.push('/valido')
          
    //         }
                     
    // })

    let requests = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    axios.post('http://localhost:8080/Vendeur/login', requests)
    .then(res => {
     
            console.log(res);
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
                history.push('/valido')
          
            }

        }else{
            history.push('/sign-in')
        }
              
        

       
      
        
    })
    
    }

    return ( 
      
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={Submit}>
         
                <p className="h4 text-center mb-4">Sign in</p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
                </label>
                <input type="email" id="email" className="form-control" required/>
                <br />
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
                </label>
                <input type="password" id="password" className="form-control" required/>
                <div className="text-center mt-4">
                    {/* <div className="d-grid">
                    <button className="btn btn-primary">Sign in</button>
                    </div> */}
                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  
     );
}

export default Login;