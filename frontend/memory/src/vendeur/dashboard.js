import { useEffect, useState } from 'react';
// import { MDBIcon  } from 'mdbreact';
// import { ArrowRight } from 'react-bootstrap-icons';

import axios from 'axios';
import React, { Component }  from 'react';



// import './validate.css'

const Listproducts = () => {

    const [products , setproducts] = useState();
    const [product, setproduct] = useState([]);
 

   
 
  
    const HandleValidate = (id) =>{
         
      // console.log(id);
   
    axios.get(`http://localhost:8080/Product/${id}` 
    // {
    //   headers: {
    //     'Authorization': `Bearer ${Tokenadmin}` 
    //   }}
    )
    .then(function (response){

        setproduct(response.data)
          // console.log(response);
      })
          .catch(function (err) {
              console.log(err);
      });
      
     
      
    }
    const Submit = (id) => {
     
      let request = {
        name: document.getElementById("name").value,
       
        price: document.getElementById("price").value,

        description: document.getElementById("description").value,

        image: document.getElementById("image").value
    }
      axios.put(`http://localhost:8080/Product/${id}`, request,
      // {
      //   headers: {
      //     'Authorization': `Bearer ${Tokenadmin}` 
      //   }}
      )
      .then(function (response){
        //  console.log(response.data);
  })
      .catch(function (err) {
          console.log(err);
  });

}

const deleteproduct = (id) => {

	axios.delete(`http://localhost:8080/Product/delete/${id}`)
	.then(res => res.data);
}


    useEffect(()=>{

        axios.get(`http://localhost:8080/Product/all`)
        .then(function (response) {
         
          
            setproducts(response.data)
        
        }).catch(function (err) {
          console.log(err);
      });
        

    })
    return ( 
        <div className="validateParticipant tbl-content">
            <h1 >Validate vendeur</h1>

         

        <table className="table">
        <thead>
          <tr>
            <th scope="col">image</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
           
        
            <th scope="col">description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          products &&
          products.map((products) =>(

            <tr key={products._id}>
            <td><img src={products.image} width="60px"/> </td>
            <td>{products.name}</td>
            <td>{products.price}</td>
          
          
            <td>{products.description}</td>
            {/* <button type="button" onClick={()=> handleValidate(products._id)} className="btnValidate">  update</button> */}
            <td> <button type="button" class="btn btn-warning" onClick={()=> HandleValidate(products._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
           
                   <i class="fa fa-pencil-square-o"></i>
                </button>
                <button type="button" class="btn btn-danger" onClick={()=> deleteproduct(products._id)} >
           
                <i class='fa fa-trash'></i>
                </button>

                </td>

          </tr>
            
          ))
        }

         
        
         
        </tbody>
      </table> 
      
      <div class="modal fade" id="exampleModal" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">edit product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
     
      <div class="modal-body">
    
               
      <form onSubmit={()=>Submit(product._id)} >

            <div className="form-group">
                <label>name</label>
                <input type="text" Value={product.name} className="form-control" id="name"  />
            </div>

            <div className="form-group">
                <label>price</label>
                <input type="text" Value={product.price} className="form-control" id="price" />
            </div>

            <div className="form-group">
                <label>description</label>
                <input type="text" Value={product.description} className="form-control" id="description" />
            </div>

            <div className="form-group">
                <label>image</label>
                <input type="text" Value={product && product.image} className="form-control" id="image" />
               
            </div>
           
            <button type="submit" class="btn btn-primary">Save</button>
         
        </form>

      </div>


     
    </div>
  </div>
</div>

        </div>
     );
}
 


export default Listproducts;