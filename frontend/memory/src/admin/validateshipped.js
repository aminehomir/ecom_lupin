import { useEffect, useState } from 'react';
import axios from 'axios';



// import './validate.css'

const Validateshipped = () => {

    const [orders , setOrders] = useState();

    useEffect(()=>{

        axios.get(`http://localhost:8080/Order/all`)
        .then(function (response) {
         
          
            setOrders(response.data)
        
        }).catch(function (err) {
          console.log(err);
      });
      
      })
      let Tokenadmin = localStorage.getItem("tokenadmin");

    const Validate = (id) =>{
    

     
      
            axios.put(`http://localhost:8080/Order/${id}`, {is_shipped: true},
            // {
            //   headers: {
            //     'Authorization': `Bearer ${Tokenadmin}` 
            //   }}
            )
            .then(function (response){
               console.log(response.data);
        })
            .catch(function (err) {
                console.log(err);
        });


    }

    return ( 
        <div className="validateParticipant tbl-content">
            <h1 >Validateshipped</h1>

            
          

        <table className="table">
        <thead>
          <tr>
            <th scope="col">product</th>
           
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
         orders &&
         orders.map((orders) =>(

            <tr key={orders._id}>
            <td>{orders.id_Product}</td>
            
        
            <td><button type="button" onClick={()=> Validate(orders._id)} className="btnValidate">Validate</button></td>

          </tr>
            
          ))
        }

         
        
         
        </tbody>
      </table>

        </div>
     );
}
 
export default Validateshipped;