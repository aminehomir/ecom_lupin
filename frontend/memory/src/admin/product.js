import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function App() {
    const [product, setproduct] = useState([]);

    useEffect(()=>{
        let id = localStorage.getItem("idproduit");
        console.log(id);
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
    },[])

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:8080/Checkout/checkout",
      { token, product}
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", {type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
        <img src={product.image} alt="" style={{width: '23%'}}/>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51IdyMEAPogvxnaE9yPsHfEeWlRMIE5G1mAMbQXfKowwEWcSdb3TeAmpxWM5ffYwBF81D8AwAocgmdcivSjHFNDrR00e7W2rLWm"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App; 