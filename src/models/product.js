const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required:true},
    brand: {type: String, required: true}
}, {timestamps: true,
   versionKey: false
})

module.exports = model('TechProduct', productSchema)