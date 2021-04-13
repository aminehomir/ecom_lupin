const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const Ads = new Schema(
  {
    
    title: {
      type: String,
 
    },
    image: {
      type: String,
    }
    
  },
  {
    versionKey: false
}
);

const Adsmodel = mongoose.model("Ads", Ads);
module.exports = Adsmodel;