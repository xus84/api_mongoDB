const productCtrl = {}

const product = require('../models/product')
const Product = require('../models/product')

productCtrl.getProducts = async (req, res) => {
   const products = await Product.find()
   res.json(products)
}
productCtrl.createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.send({message: 'Product created'})
}
productCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params)
    res.send(product)
}

productCtrl.updateProduct = async (req, res) => {
    await product.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'product updated'})

}
productCtrl.deleteProducts = async (req, res) => {
    await product.findByIdAndDelete(req.params.id)
    res.send('delete product')
}

module.exports = productCtrl;