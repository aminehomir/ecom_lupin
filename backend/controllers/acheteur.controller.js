const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const Admin = require('../models/users.model');
const Useracheteur = require('../models/users.model');
let nodemailer = require('nodemailer');
require('dotenv').config()


const addusers = (req, res) => {

       

                        bcrypt.hash(req.body.password, 10, function (err, hashPassword) {

                                if (err) {
                                        res.json({
                                                error: err
                                        })
                
                                }
                
                                const AdminPush = new Useracheteur({
                
                                        full_name: req.body.full_name,
                                        email: req.body.email,
                                        phone: req.body.phone,
                                        password: hashPassword,
                                        is_valid: false,
                                      
                                   


                
                                });
                
                                AdminPush
                                        .save()
                                        .then((data) => {
                                               let id = data._id;
                                               let email = data.email;

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
                                                        subject: 'activation du compte ',
                                                        text: `Pour activer le compte clique sur le lien : http://localhost:3000/${id}`
                                                };
                                                
                                                transporter.sendMail(mailOptions, function(error, info){
                                                        if (error) {
                                                        console.log(error);
                                                        } else {
                                                        console.log('Email sent: ' + info.response);
                                                        }
                                                })
                                                res.send(data);
                                                res.json("Admin successfully added")
                
                                        }).catch((err) => res.status(400).json("Error :" + err));
                
                        });

               



    






}

const loginAcheteur = (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        Useracheteur.findOne({ email: email })
                .then(acheteur => {

                        if (acheteur) {
                                bcrypt.compare(password, acheteur.password, function (err, result) {
                                         if (err) {
                                                 res.json({error: err})

                                        }
                                        if (result) {
                                                let token = jwt.sign( {email: email }, 'achteurKey', (err, token) => {
                                                        res.json({  
                                                        message: 'login Sucessful!',
                                                        token,
                                                        id : acheteur._id,
                                                        is_valid: acheteur.is_valid})

                                                        
                       
                                                })
                                        } else {
                                                res.json({ message: 'phone or password err'})
                                        }

                                })


                        } else {
                                res.json({ message: 'acheteur not found'})
                        }
                       

                }).catch((err) => res.status(400).json("Error :" + err));





}


const validateacheteur = (req , res)=>{
       
       

       
        Useracheteur.findByIdAndUpdate(req.params.id ,{
            is_valid: true,

          

        }, 
        { useFindAndModify: false })
        .then(acheteur => {

            let email = acheteur.email;
            let id = acheteur._id;
            console.log(email);
            
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









module.exports = {
        addusers ,loginAcheteur,validateacheteur
};