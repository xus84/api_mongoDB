const { Router } = require('express')
const productCtrl = require('../controllers/products.controller.js')
const router = Router()



router.get('/', productCtrl.getProducts)

router.post('/', productCtrl.createProduct)

router.get('/:id', productCtrl.getProduct)

router.put('/:id', productCtrl.updateProduct)

router.delete('/:id', productCtrl.deleteProducts)

module.exports = router