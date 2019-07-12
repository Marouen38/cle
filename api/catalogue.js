/*
catalogue de smoothie
*/
var express = require('express');
var router = express.Router();
const Smoothie = require('../models/smoothie');
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/list', async(req, res, next)=> {
    try {
        const smoothies = await Smoothie.find({});
        console.log('Liste de smoothie : ', smoothies);
        res.send(smoothies);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

router.get('/:id',async(req,res,next)=>{

   
    try {
        const smoothie = await Smoothie.findById(mongoose.Types.ObjectId(req.params.id)).exec();
        console.log('La smoothie : ',smoothie);
        res.send(smoothie);
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);  
    }
  
 })
 router.post('/add', async (req, res, next) => {
    ​
        let newSmoothie = new Smoothie();
        newSmoothie.title = req.body.title;
    ​
        try {
            const smoothie = await newSmoothie.save();
            res.send(smoothie);
        } catch(err) {
            res.status(400).send(err);
        }
    });

module.exports = router;