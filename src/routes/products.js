const { Router, response } = require('express')
const router = new Router()

const Contenedor = require('../contenedor.js');
const productos = new Contenedor('./productos.txt')


router.get('/', async (req, response) => {

    const allProducts = await productos.getAll()
    response.json(allProducts)

})


router.get('/:id', async (req, response) => {

    const { id } = req.params
    const productById = await productos.getById(parseInt(id))

    if (productById) {
        response.json(productById)

    } else {
        response.status(404).send({ error: 'Product not found' })
    }


})


router.post('/', async (req, response) => {

    const { image, title, price, description } = req.body

    if (image && title && price && description) {
        const id = ((await productos.getAll()).length) + 1
        const newProduct = { ...req.body, id }
        await productos.save(newProduct)
        const productById = await productos.getById(id)
        response.json(productById)

    } else {
        response.send('Invalido, todos los campos son obligatorios')

    }

})


router.delete('/:id', async (req, response) => {
    const { id } = req.params
    const deleteProdById = await productos.getById(parseInt(id))

    if (deleteProdById) {
        await productos.deleteById(parseInt(id))
        response.send({deleted: deleteProdById})

    } else {
        response.status(404).send({ error: 'Product not found' })
    }

})






module.exports = router;

