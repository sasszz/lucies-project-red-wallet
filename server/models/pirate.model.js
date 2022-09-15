const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const pirateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minLength: [3, 'Name must be at least three characters.']
    },
    image: {
        type: String,
        required: [true, 'Image is required.'],
    },
    chests: {
        type: Number,
        required: [true, 'Number of chests is required.'],
    },
    phrase: {
        type: String,
        required: [true, 'Pirate catch phrase is required.'],
        minLength: [3, 'Pirate catch phrase must be at least three characters.']
    },
    position: {
        type: String,
    },
    pegLeg: {
        type: Boolean,
    },
    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    },
}, {timestamps: true});

pirateSchema.plugin(uniqueValidator);

const Pirate = mongoose.model('Pirate', pirateSchema);
module.exports = Pirate;