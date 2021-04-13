const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const connection = require('./config/connection');
require('dotenv').config()


const port = process.env.PORT;

app.use(express.json());
app.use(cors());

//Prise en charge des formulaires HTML
app.use(bodyParser.urlencoded({ extended: true }))

// Prise en charge du JSON
app.use(bodyParser.json())


const adminRoute = require('./routes/admin');
const vendeurRoute = require('./routes/vendeur');
const acheteurRoute = require('./routes/acheteur');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const usersRoute = require('./routes/users');
const categoryRoute = require('./routes/category');
const adsRoute = require('./routes/ads');
const checkRoute = require('./routes/checkout');


app.use('/Admin' ,adminRoute);
app.use('/Vendeur' ,vendeurRoute);
app.use('/Acheteur' , acheteurRoute);
app.use('/Product' , productRoute);
app.use('/Order' , orderRoute);
app.use('/Users' , usersRoute);
app.use('/Category' , categoryRoute);
app.use('/Ads' , adsRoute);
app.use('/Checkout' , checkRoute);





  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })