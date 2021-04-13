
import { useParams } from "react-router-dom";
import axios from 'axios';

const Validation = () =>{


    const {id} = useParams();
       
    axios.put(`http://localhost:8080/Acheteur/${id}`)
    .then(resp => {

    })
    .catch(err => {
        console.log(err);
    })

    


return (
<div>votre comtpe est activé</div>
);

}
export default Validation;