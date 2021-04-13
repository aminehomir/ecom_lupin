
const Category = require('../models/category.model');

const addCategory = (req, res) => {

      
                
                const CategoryPush = new Category({

                        name: req.body.name
                       

                });

                CategoryPush
                        .save()
                        .then((data) => {
                            
                                res.send(data);
                                res.json("Category successfully added")

                        }).catch((err) => res.status(400).json("Error :" + err));


        


}




const getAllCategory = (req , res) => {
    Category.find()
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error :" + err));
}







module.exports = {
        addCategory ,getAllCategory
};