import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";




const Addproduct = () => {
    const history = useHistory()

    const [category ,setcategory] = useState();

    useEffect(()=>{

        axios.get(`http://localhost:8080/Category/all`)
        .then(function (response) {
         
          
            setcategory(response.data)
        
        }).catch(function (err) {
          console.log(err);
      });
        

    })
 
    const Submit = (e) => {
        e.preventDefault();
        let idvendeur = localStorage.getItem("idvendeur");
        let vendeurToken = localStorage.getItem("tokenvendeur");

        console.log(vendeurToken);
        let request = {
            id_vendeur:idvendeur,
            name: document.getElementById("name").value,
           
            price: document.getElementById("price").value,

            category: document.getElementById("category").value,

            description: document.getElementById("description").value,

            image: document.getElementById("image").value
        }
        axios.post('http://localhost:8080/Product/add', request,
        {
          headers: {
            'Authorization': `Bearer ${vendeurToken}` 
          }})
        .then(res => {
              if(res.error){
                  console.log('product is not added !!');
              }

              console.log(res.data);
          
              history.push('/Dashboard')   
        })
        .catch(err => {
            console.log(err);
        })
    }

    return ( 
        
<div className="bg-grey-lighter min-h-screen flex flex-col">
  <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div  className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <form onSubmit={Submit}>
      <h1 className="mb-8 text-3xl text-center">add product</h1>
      <input type="text"  className="block border border-grey-light w-full p-3 rounded mb-4" id="name" placeholder="name" />
           

            
           <input type="text"  className="block border border-grey-light w-full p-3 rounded mb-4" id="price" placeholder="price" />
       

      
          
           <select   class="block border border-grey-light w-full p-3 rounded mb-4" id="category" >
           {
          category &&
          category.map((category) =>(
              
           <option  key={category._id} value={category._id}>{category.name}</option>
           ))
           }
          
           </select>
           
      

           <input type="text"  className="block border border-grey-light w-full p-3 rounded mb-4" id="description" placeholder="description" />
      

       
           <input type="text"  className="block border border-grey-light w-full p-3 rounded mb-4" id="image" placeholder="image" />
      
    
        
      <button type="submit" className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700">Create Account</button>
      </form>
    </div>
   
  </div>
</div>
    
     );
}

export default Addproduct;