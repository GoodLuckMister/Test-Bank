const mongoose = require('mongoose');
const { Schema } = mongoose


const bankSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
},
    {
        versionKey: false,
        timestamps: true
    }
)

const bank = mongoose.model('banks', bankSchema);

module.exports = bank

