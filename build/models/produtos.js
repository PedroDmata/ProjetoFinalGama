"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db2 = require('../database/db');
const sequelize_1 = require("sequelize");
const categorias = require('./categorias');
const produtos = db2.define('produtos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    id_categoria: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: categorias,
            key: 'id'
        }
    },
}, {
    tableName: 'produtos'
});
module.exports = produtos;
