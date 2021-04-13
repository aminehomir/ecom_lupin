const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin.model');

const addAdmin = (req, res) => {

        jwt.verify(req.token, 'hrKey', (err, authData) => {
                if(err) {
                        res.sendStatus(403);
                } else{

                        bcrypt.hash(req.body.password, 10, function (err, hashPassword) {

                                if (err) {
                                        res.json({
                                                error: err
                                        })
                
                                }
                
                                const AdminPush = new Admin ({
                
                                        full_name: req.body.full_name,
                                        email: req.body.email,
                                        password: hashPassword,
                                        is_valid: false,
                
                                });
                
                                AdminPush
                                        .save()
                                        .then((data) => {
                                                res.send(data);
                                                res.json("Admin successfully added")
                
                                        }).catch((err) => res.status(400).json("Error :" + err));
                
                        });

                }
        })



    






}

const loginAdmin = (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        Admin.findOne({ email:email })
                .then(admin => {
                        
                        if (admin) {
                                bcrypt.compare(password, admin.password, function (err, result) {
                                         if (err) {
                                                 res.json({error: err})

                                        }
                                        if (result) {
                                                let token = jwt.sign({email:email}, 'hrKey')
                                                        res.json({
                                                                message: 'login Sucessful!',
                                                                token,
                                                                id : admin._id,
                                                                is_valid: admin.is_valid

                                                        })
                                                
                                        } else {
                                                res.json({ message: 'email or password err'})
                                        }

                                })


                        } else {
                                res.json({ message: 'admin not found'})
                        }
                       

                }).catch((err) => res.status(400).json("Error :" + err));





}


const validate = (req , res)=>{
       
        bcrypt.hash(req.body.password, 10, function (err, hashPassword) {

       
        Admin.findByIdAndUpdate(req.params.id ,{
                is_valid: true,
                password: hashPassword

            }, 
            { useFindAndModify: false })
            .then(admin => {
                if(!admin) {
                    return res.status(404).send({
                        message: "admin not found with id " + req.params.id
                    });
                }else{
                        return res.send({
                                message: "admin successfully updated "
                            });
                }
              
       
        }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "adminnot found with id " + req.params.id
                    });                
                }
                return res.status(500).send({
                    message: "Error updating admin with id " + req.params.id
                });
            });

             
            
            res.json("Admin successfully updated")

        });
}


const getAllAdmins = (req , res) => {
        Admin.find()
        .then((admin) => res.json(admin))
        .catch((err) => res.status(400).json("Error :" + err));
}







module.exports = {
        addAdmin ,loginAdmin,getAllAdmins,validate
};