const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 
const Order = new Schema(
  {
    
    Address:{

        type: String,
        required: true,
    },
    id_Product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    is_shipped: {
      type: Boolean,
      default: false,
      
    },
    price: {
      type: Number,
      required: true,
    },
    Address:{
      type: String,
        required: true,
    }


  },
  {
    versionKey: false
}
);

const Ordermodel = mongoose.model("Order", Order);
module.exports = Ordermodel;


 

 

 