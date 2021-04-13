const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51IdyMEAPogvxnaE9kwIH8fgvn7x2HnTwXbvAVKoTMXlcP9LCzGKnpWLRtAXOUBt5yHuEkOmZig3iGgYPQjFn8gbT004qBrCsFr");
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/order.model');
const Product = require('../models/product.model');
const Uservendeur = require('../models/vendeur.model');



// const getcheckout = (req, res) => {
//   res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
// };

const createcheckout = async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";

    let orderDetails = { charge };
    let ShippingAddress = orderDetails.charge.source.address_line1
    let price = (orderDetails.charge.amount/100);
    let idProduct = product._id;
    let id_vendeur = product.id_vendeur;
    // console.log(id_vendeur);
   



    let selledProduct = await Product.findByIdAndUpdate(id_vendeur,{selled: true});






    

 




            const newOrder = new Order({
                
                id_Product: idProduct,
                Address: ShippingAddress,
                price: price,
             
        });

            const saveOrder = await newOrder.save(); 


    


    
        let seller = await Uservendeur.findById(id_vendeur);

        let newIncome = seller.pricetotal + price;
        console.log(newIncome);


        let updateIncome = await Uservendeur.findByIdAndUpdate(id_vendeur,{pricetotal: newIncome});




















  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
};



module.exports = {
    createcheckout
    // ,getcheckout
};
