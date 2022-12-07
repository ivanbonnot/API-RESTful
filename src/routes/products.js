
const Contenedor = require('../contenedor.js');
const productos = new Contenedor('../productos.txt')

const allTheProducts = async () => {
    try {

        let array = await productos.getAll()
        console.log("-----Traer todos los productos-----")
        console.log(array)

    } catch (err) {
        console.log(err)
    }
}

const productById = async () => {
    try {
        let array = await productos.getAll()
        const id = Math.floor(Math.random() * (array.length) + 1)
        let idProd = await productos.getById(id)
        console.log(`-----Traer el producto con id = ${id}-----`)
        console.log(idProd)

    } catch (err) {
        console.log(err)
    }
}


