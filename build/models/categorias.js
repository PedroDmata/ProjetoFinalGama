"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db1 = require('../database/db');
const sequelize_1 = require("sequelize");
const categorias2 = db1.define('categorias', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    tableName: 'categorias'
});
module.exports = categorias2;
