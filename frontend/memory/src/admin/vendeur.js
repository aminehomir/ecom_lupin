import { useEffect, useState } from 'react';
import axios from 'axios';



// import './validate.css'

const ValidateParticipant = () => {

    const [participants , setParticipants] = useState();

    useEffect(()=>{

        axios.get(`http://localhost:8080/Vendeur/all`)
        .then(function (response) {
         
          
            setParticipants(response.data)
        
        }).catch(function (err) {
          console.log(err);
      });
      
      })
      let Tokenadmin = localStorage.getItem("tokenadmin");

    const handleValidate = (id) =>{
    

     
      console.log(Tokenadmin);

            axios.put(`http://localhost:8080/Vendeur/${id}`, {is_valid: true},
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
            <h1 >Validate vendeur</h1>

            
            tabTitle

        <table className="table">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
        
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          participants &&
          participants.map((participants) =>(

            <tr key={participants._id}>
            <td>{participants.full_name}</td>
            <td>{participants.phone}</td>
            <td>{participants.email}</td>
        
            <td><button type="button" onClick={()=> handleValidate(participants._id)} className="btnValidate">Validate</button></td>

          </tr>
            
          ))
        }

         
        
         
        </tbody>
      </table>

        </div>
     );
}
 
export default ValidateParticipant;