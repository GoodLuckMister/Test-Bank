const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose


const commentSchema = new Schema({
    productId: {
        type: SchemaTypes.ObjectId,
        ref: 'comments'
    },
    description: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    date: {
        type: Number,
        default: Date.now().toLocaleString(),
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

const comment = mongoose.model('comments', commentSchema);

module.exports = comment

