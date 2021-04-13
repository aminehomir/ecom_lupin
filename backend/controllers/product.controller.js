const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const Product = require('../models/product.model');
const Vendeur = require('../models/vendeur.model');



const addProduct = async (req, res) =>{
    const id = req.body.id_vendeur;
    jwt.verify(req.token,'vendeurKey', async (err, authData) => {
        if(err) {
                res.sendStatus(403);
        } else{
            
            let userAccount = await Vendeur.findById(id);
            console.log(id);

            let typeAccount = userAccount.type_account;
           
            let listedProduct = userAccount.listproduct;


            if (typeAccount == 'starter') {

                if (listedProduct >= 10 ) {

                   

                    error.push('If you want to seller more ,pls upgrade your acoount ');
                    return res.json({
                            error : error
                    }) 
                    
                }

            }
            if (typeAccount == 'pro'){

                if (listedProduct >= 50 ) {

                    error.push('If you want to seller more ,pls upgrade your acoount ');
                    return res.json({
                            error : error
                    }) 
                    
                }

                
            }
          
            const product = new Product({
                id_vendeur:req.body.id_vendeur,
                name: req.body.name,
                price: req.body.price,
                image: req.body.image,
                category: req.body.category,
                description: req.body.description
              });
             product.save()
             const ProductListed = await Vendeur.findByIdAndUpdate(req.body.id_vendeur,{listproduct : listedProduct+1})
             .then((data) => {
                     res.send(data);
                     res.json("Product successfully added")

             }).catch((err) => res.status(400).json("Error :" + err));
           
            
        }
    })
 


}


const getAllproduct = (req , res) => {
     
    Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error :" + err));

}

const getproduct = (req, res) => {

    // console.log(req.params.id);
    Product.findById(req.params.id)
        .then((Product) => res.json(Product))
        .catch((err) => res.status(400).json("Error :" + err));
};
  

const updateproduct = (req, res) => {
    Product.findById(req.params.id)
        .then((cat) => {
            cat.nom = req.body.nom;
           
            cat.name = req.body.name,
            cat.price = req.body.price,
            cat.image = req.body.image,
            cat.brand = req.body.brand,
            cat.description = req.body.description,
           
           
  
            cat
                .save()
                .then(() => res.json("product successfully updated"))
                .catch((err) => res.status(400).json("Error :" + err));
        })
        .catch((err) => res.status(400).json("Error :" + err));
  };



  const deleteproduct = (req, res) => {

    // console.log(req.params.id);
    Product.findByIdAndRemove(req.params.id)
        .then(() => res.json("product successfully deleted"))
        .catch((err) => res.status(400).json("Error :" + err));
  };
  


module.exports = {
    addProduct,getAllproduct,updateproduct,deleteproduct,getproduct
};

