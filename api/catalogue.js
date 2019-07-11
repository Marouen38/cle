/*
catalogue de smoothie
*/
var express = require('express');
var router = express.Router();
const smoothie = require('../models/smoothie');
/* GET users listing. */
router.get('/list', async(req, res, next)=> {
    try {
        const smoothies = await smoothie.find({});
        console.log('Liste de smoothie : ', smoothies);
        res.send(smoothies);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

router.get('/:id',async(req,res,next)=>{
    const smoothie = await smoothie.findById(mongoose.Types.ObjectId(req.params.id)).exec();
    try {
        
        console.log('La smoothie : ',smoothie);
        res.send(smoothie);
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);  
    }
  
 })

module.exports = router;