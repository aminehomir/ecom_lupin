const mongoose = require("mongoose");
const {ObjectId} = require('mongodb');


const prodctSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  image: { 
    type: String, 
    required: true 
  },
  id_vendeur: { 
    type: ObjectId,
    ref: 'vendeur'
    
  },
  price: { 
    type: Number, 
    default: 0, 
    required: true 
  },
  category: { 
    type: ObjectId,
    ref: 'Category'
   },
   selled: {
    type: Boolean,
    default: false,
},
  description: {
     type: String, 
     required: true 
    }
}
,
  {
    versionKey: false
}
);

const productModel = mongoose.model('Product', prodctSchema);

module.exports = productModel;
