"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const categorias1 = require('../models/categorias');
const bcrypt = require('bcryptjs');
//Listar todos produtos
const categoriasController1 = {
    listarCategoria: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const listacategoria = yield categorias1.findAll();
            res.status(200).json(listacategoria);
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ error });
        }
    }),
    //Listar categoria por ID
    listarcategoriaId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const listaDecategorias = yield categorias1.findAll({
                    where: {
                        id
                    }
                });
                if (!listaDecategorias) {
                    return res.status(404).json('Id não encontrado');
                }
                else {
                    res.status(200).json(listaDecategorias);
                }
            }
            catch (error) {
                res.status(404).json("error");
            }
        });
    },
    //Cadastrar categoria
    cadastrarcategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, descricao } = req.body;
                const casdastracategoria = yield categorias1.create({
                    nome,
                    descricao
                });
                if (!casdastracategoria) {
                    res
                        .status(400)
                        .json('Houve um erro na requisição. Por favor, tente novamente.');
                }
                else {
                    res.status(201).json(`Categoria ${nome} cadastrado com sucesso!`);
                }
            }
            catch (error) {
                res.status(400).json("error");
            }
        });
    },
    //Atualizar categoria
    atualizarcategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nome, descricao } = req.body;
                const Atualizacategoria = yield categorias1.findOne({
                    where: {
                        id: id
                    }
                });
                if (!Atualizacategoria) {
                    res
                        .status(400)
                        .json('Houve um erro na requisição. Por favor, tente novamente.');
                }
                else {
                    yield categorias1.update({ nome, descricao }, { where: { id } });
                }
                res
                    .status(200)
                    .json(`Informações da categoria ${nome} atualizadas com sucesso!`);
            }
            catch (error) {
                res.status(400).json("error");
            }
        });
    },
    // Deletando categoria
    deletarcategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deletandocategoria = yield categorias1.destroy({
                    where: {
                        id
                    }
                });
                if (!deletandocategoria) {
                    res.status(404).json('Id não encontrado');
                }
                else {
                    res.sendStatus(204);
                }
            }
            catch (error) {
                return res.status(400).json("error");
            }
        });
    }
};
module.exports = categoriasController1;
