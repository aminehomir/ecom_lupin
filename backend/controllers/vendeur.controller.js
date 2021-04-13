const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Uservendeur = require('../models/vendeur.model');
let nodemailer = require('nodemailer');
require('dotenv').config()


const addusers = (req, res) => {

       

                        bcrypt.hash(req.body.password, 10, function (err, hashPassword) {

                                if (err) {
                                        res.json({
                                                error: err
                                        })
                
                                }
                
                                const AdminPush = new Uservendeur({
                
                                        full_name: req.body.full_name,
                                        email: req.body.email,
                                        password: hashPassword,
                                        is_valid: false,
                                        phone: req.body.phone,
                                        first_login: false,
                                        type_account: "starter"


                
                                });
                
                                AdminPush
                                        .save()
                                        .then((data) => {
                                                res.send(data);
                                                res.json("Admin successfully added")
                
                                        }).catch((err) => res.status(400).json("Error :" + err));
                
                        });

               



    






}

const loginVendeur = (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        Uservendeur.findOne({ email: email })
                .then(vendeur => {
                        
                        if (vendeur) {
                                bcrypt.compare(password, vendeur.password, function (err, result) {
                                         if (err) {
                                                 res.json({error: err})

                                        }
                                        if (result) {
                                                let token = jwt.sign( {email: email }, 'vendeurKey', (err, token) => {
                                                        res.json({ token: token,
                                                                id : vendeur._id,
                                                                first_login: vendeur.first_login,
                                                                is_valid: vendeur.is_valid
                                                        })
                                                })
                                        } else {
                                                res.json({ message: 'phone or password err'})
                                        }

                                })


                        } else {
                                res.json({ message: 'admin not found'})
                        }
                       

                }).catch((err) => res.status(400).json("Error :" + err));





}


const validatevendeur = (req , res)=>{
       
       

       
            Uservendeur.findByIdAndUpdate(req.params.id ,{
                is_valid: true,

              

            }, 
            { useFindAndModify: false })
            .then(vendeur => {

                let email = vendeur.email;
                let id = vendeur._id;
                // console.log(email);
                
                var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                        user: process.env.USER,
                        pass: process.env.PASS
                        }
                });
                
                var mailOptions = {
                        from: 'homir007@gmail.com',
                        to: email,
                        subject: 'Sending Email using Node.js',
                        text: 'pour créer un nouveau mot de pass clique sur le lien : http://localhost:3000/sign-in'
                };
                
                transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                        console.log(error);
                        } else {
                        console.log('Email sent: ' + info.response);
                        }
                })

                if(!vendeur) {
                    return res.status(404).send({
                        message: "vendeur not found with id " + req.params.id
                    });
                }else{
                        return res.send({
                                message: "vendeur successfully updated "
                            });
                }
              
       
        }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "vendeur not found with id " + req.params.id
                    });                
                }
                return res.status(500).send({
                    message: "Error updating admin with id " + req.params.id
                });
            });

             
            
            res.json("vendeur successfully updated")

}


const newpass = (req , res)=>{
       
       
        bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
       
        Uservendeur.findByIdAndUpdate(req.params.id ,{
                password: hashPassword,
                first_login: true

          

        }, 
        { useFindAndModify: false })
        .then(vendeur => {

            if(!vendeur) {
                return res.status(404).send({
                    message: "vendeur not found with id " + req.params.id
                });
            }else{
                    return res.send({
                            message: "vendeur successfully updated "
                        });
            }
          
   
    }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "vendeur not found with id " + req.params.id
                });                
            }
            return res.status(500).send({
                message: "Error updating vendeur with id " + req.params.id
            });
        });

         
        
        res.json("vendeur successfully updated")

        });

}


const getAllvendeur = (req , res) => {
     
        Uservendeur.find({is_valid: false})
        .then((vendeur) => res.json(vendeur))
        .catch((err) => res.status(400).json("Error :" + err));

}







module.exports = {
        addusers ,loginVendeur,getAllvendeur,validatevendeur,newpass
};