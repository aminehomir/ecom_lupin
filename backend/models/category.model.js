const mongoose = require("mongoose");
const {ObjectId} = require('mongodb');


const Categorychema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
}
}
,
  {
    versionKey: false
}
);

const categoryModel = mongoose.model('Category', Categorychema);

module.exports = categoryModel;
