const mongoose = require('mongoose');
const { Schema } = mongoose


const bankSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    rate: {
        type: Number,
        default: 5,
    },
    maxloan: {
        type: Number,
        default: 100000,
    },
    minDownPayment: {
        type: Number,
        default: 20,
    },
    loanTerm: {
        type: Number,
        default: 365,
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

const bank = mongoose.model('banks', bankSchema);

module.exports = bank

