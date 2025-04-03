const { models } = require('../models/index');

async function getAll (req, res){
    const datos = models.film.findAll()
    console.log(datos)
    return datos
}

async function add (req){
    const datos = models.film.create(req)
    console.log(req)
    return JSON.stringify(datos)
}

module.exports = {
	getAll,
    add
};