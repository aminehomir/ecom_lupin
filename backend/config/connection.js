const mongoose = require('mongoose');
require('dotenv').config()

// const logger = require('./logger')


// mongoose.connect(process.env.DB_CONNECTION , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
    
//   }).then(() => {
//     logger.info("Successfully connected to the database");  
 
//   }).catch(err => {
//     logger.error('Could not connect to the database. Exiting now...', err);
    
//   });
  
  mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});