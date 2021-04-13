const mongoose = require("mongoose");



const Schema = mongoose.Schema;

const Users = new Schema(
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

    role: {
      type: String,
     default: "acheteur",
    },

    phone: {
      type: String,
      required: true,
    },
    
    password: {
      type: String,
      required: true,
    }
    
  },
  {
    versionKey: false
}
);





const UsersList = mongoose.model("Users", Users);



module.exports = UsersList;



