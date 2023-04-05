import Express from "express";

const requestLog = require('../middlewares/requestLog')



const categoriasController = require('../controllers/categoriasController')


const routes1 = Express.Router()





routes1.get('/categoria', requestLog, categoriasController.listarCategoria)
routes1.get('/categoria/:id', categoriasController.listarcategoriaId)
routes1.post('/categoria', categoriasController.cadastrarcategoria)
routes1.put('/categoria/:id', categoriasController.atualizarcategoria)
routes1.delete('/categoria/:id', categoriasController.deletarcategoria)


module.exports = routes1
