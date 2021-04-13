const mongoose = require("mongoose");

const deliveryManSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    }
  },
  {
    versionKey: false
}
 
);

const deliverymodel= mongoose.model("Deliveryman", deliveryManSchema);
module.exports = deliverymodel;