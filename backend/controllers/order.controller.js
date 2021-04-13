const Order = require('./../models/order.model')


const validateOrder = async (req,res) =>{

            Order.findByIdAndUpdate(req.params.id,{
                is_shipped: true

        

        }, 
        { useFindAndModify: false })
        .then(order => {

            if(!order) {
                return res.status(404).send({
                    message: "order not found with id " + req.params.id
                });
            }else{
                    return res.send({
                            message: "order successfully updated "
                        });
            }
        

        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "order not found with id " + req.params.id
                });                
            }
            return res.status(500).send({
                message: "order updating vendeur with id " + req.params.id
            });
        });

        

        res.json("order successfully updated")

}





const getAllOrders = (req,res) =>{
    Order.find({is_shipped: false})
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error :" + err));



}






module.exports = {validateOrder,getAllOrders}