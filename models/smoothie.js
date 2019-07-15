const mongoose = require('mongoose');

const smoothieSchema = mongoose.Schema({
    title: {
        type: String,
        required: false
    },

    ingredient: [
        {
            nom: {
                type: String
            },
            quantitie: {
                type: String
            }
        }
    ],
    features: {
        cost: {
            type: String
        },
        prepareTime: {
            type: String
        },
    },
    advice: {
        type: String
    },
    description: {
        type: String
    },
    steps: [
        {
            stepText: {
                type: String
            },
        },
        {
            stepText: {
                type: String
            },
        },
        {
            stepText: {
                type: String
            },
        },
        {
            stepText: {
                type: String
            }
        }
    ],
    photo: [
        {
            titte: String,
            path: String,
            description: String
        }
    ]
});

const Smoothie = module.exports = mongoose.model('smoothie', smoothieSchema, 'smoothies');