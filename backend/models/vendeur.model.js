const mongoose = require("mongoose");



const Schema = mongoose.Schema;

const Vendeur = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
   
    email: {
      type: String,
      required: true,
    },
    is_valid: {
      type: Boolean,
      required: true,
    },
    
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true
     },
 
   type_account: {
       type: String,
       required: true,
     },

     role: {
      type: String,
     default: "vendeur",
    },


     pricetotal: {
      type: Number,
      default:0
    },

    listproduct: {
      type: Number,
      default: 0,
    },
     first_login: {
      type: Boolean,
      required: true,
    }
    
  },
  {
    versionKey: false
}
);





const Uservendeur = mongoose.model("vendeur", Vendeur);

module.exports = Uservendeur;


