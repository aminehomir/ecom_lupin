const express = require('express');
const router = express.Router();
const Ads = require('../controllers/ads.controller')
const auth = require('../middleware/auth')



router.post('/add',auth,Ads.addAds);

// router.get('/all', Product.getAllproduct);
router.get('/:id', Ads.getAds);

router.delete("/:id",Ads.deleteAds);



module.exports = router;