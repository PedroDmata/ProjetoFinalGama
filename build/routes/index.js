"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requestLog = require('../middlewares/requestLog');
const categoriasController = require('../controllers/categoriasController');
const routes1 = express_1.default.Router();
routes1.get('/categoria', requestLog, categoriasController.listarCategoria);
routes1.get('/categoria/:id', categoriasController.listarcategoriaId);
routes1.post('/categoria', categoriasController.cadastrarcategoria);
routes1.put('/categoria/:id', categoriasController.atualizarcategoria);
routes1.delete('/categoria/:id', categoriasController.deletarcategoria);
module.exports = routes1;
