const db = require('../database/db')
const { DataTypes } = require('sequelize')

const categorias = db.define(
  'categorias',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },

    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt:{
      type: DataTypes.DATE
  },
  updatedAt:{
      type: DataTypes.DATE
  }
  },
  {
    tableName: 'categorias'
  }
)

module.exports = categorias
