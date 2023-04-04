const express = require('express')

const requestLog = require('../middlewares/requestLog')



const categoriasController = require('../controllers/categoriasController')


const routes = express.Router()





routes.get('/categoria', requestLog, categoriasController.listarCategoria)
routes.get('/categoria/:id', categoriasController.listarcategoriaId)
routes.post('/categoria', categoriasController.cadastrarcategoria)
routes.put('/categoria/:id', categoriasController.atualizarcategoria)
routes.delete('/categoria/:id', categoriasController.deletarcategoria)


module.exports = routes
