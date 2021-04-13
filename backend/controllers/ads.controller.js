const Ads = require('../models/ads.model');
const jwt = require('jsonwebtoken');






const addAds = (req, res) =>{
    
    jwt.verify(req.token,'hrKey', (err, authData) => {
        if(err) {
                res.sendStatus(403);
        } else{
          
            const ads = new Ads({
         
               title: req.body.title,
                image: req.body.image
               
             
              });
             ads.save()
          
             .then((data) => {
                     res.send(data);
                     res.json("ADS successfully added")

             }).catch((err) => res.status(400).json("Error :" + err));
           
            
        }
    })
 


}

const getAds = (req, res) => {

    console.log(req.params.id);
    Ads.findById(req.params.id)
        .then((Ads) => res.json(Ads))
        .catch((err) => res.status(400).json("Error :" + err));
};
  

const deleteAds = (req, res) => {

    console.log(req.params.id);
    Ads.findByIdAndRemove(req.params.id)
        .then(() => res.json("Ads successfully deleted"))
        .catch((err) => res.status(400).json("Error :" + err));
  };
  





module.exports = {addAds,getAds,deleteAds}