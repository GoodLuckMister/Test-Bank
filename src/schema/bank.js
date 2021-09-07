const mongoose = require('mongoose')
const { Schema, SchemaTypes } = mongoose
const mongoosePaginate = require('mongoose-paginate-v2')


const BankSchema = new Schema({
    bankName: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    InterestRate: {
        type: Number,
    },
    maximumLoan: {
        type: Number,
    },
    minimumDownPayment: {
        type: Number,
    },
    loanTerm: {
        type: Number,
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'user',
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

BankSchema.plugin(mongoosePaginate)

const Bank = mongoose.model('contact', BankSchema)

module.exports = Bank


