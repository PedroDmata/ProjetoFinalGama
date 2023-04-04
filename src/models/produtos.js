 const db = require('../database/db')
 const { DataTypes } = require('sequelize')
const categorias = require('./categorias')

 const produtos = db.define('produtos', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     allowNull: false,
     primaryKey: true
   },
   nome: {
     type: DataTypes.STRING,
     allowNull: false
   },
   descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
   preco: {
     type: DataTypes.DECIMAL,
     allowNull: false
   },
   id_categoria: {
    type: DataTypes.INTEGER,
    references: {
      model: categorias,
      key: 'id'
    }
  },
 },
 {  
   tableName: 'produtos'
 })

module.exports = produtos
