/*
catalogue de smoothie
*/
var express = require('express');
var router = express.Router();
const Smoothie = require('../models/smoothie');
const mongoose = require('mongoose');
const {
    check,
    validationResult
} = require('express-validator');


/* GET users listing. */
router.get('/list', async (req, res, next) => {
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

router.get('/:id', async (req, res, next) => {

    try {
        const smoothie = await Smoothie.findById(mongoose.Types.ObjectId(req.params.id)).exec();
        console.log('La smoothie : ', smoothie);
        res.send(smoothie);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

})
router.post('/add',
    [
        check('title').not().isEmpty().withMessage("Le nom ne peut être vide")
    ],
    async (req, res, next) => {
        console.log(req.body);
        
        // Validation du formulaire
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            res.status(400).send({
                errors: errors.array()
            });
            return;
        }

        let newSmoothie = new Smoothie();
        newSmoothie.title = req.body.title;

        try {
            const smoothie = await newSmoothie.save();
            res.send(smoothie);
        } catch (err) {
            res.status(400).send(err);
        }
    });
module.exports = router;

