const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose


const productSchema = new Schema({
    imageUrl: {
        type: String,
        default: 'https://lh3.googleusercontent.com/proxy/RPQDEWx1vjnnx5SFqd_R6FLOGoWzgjkSCCkmz16Zj2c6XZ4QRebA8l5HLIgSgr7TWStKhtsS-9hD43gBwfw_jy_PVS8NhCyh8QBBKxuPLo0N1Ze0wLc8K0K06E65PxCI2g'
    },
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    count: {
        type: Number,
        default: 10,
    },
    size: {
        type: Object,
        default: {
            width: 200,
            height: 200,
        },
    },
    weight: {
        type: String,
        default: '200gr',
    },
    comments: {
        type: Array,
        set: (data) => (!data ? [] : data)
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

const product = mongoose.model('products', productSchema);

module.exports = product

