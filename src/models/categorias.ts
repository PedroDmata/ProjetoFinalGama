const db1 = require('../database/db')
import { DataTypes } from "sequelize";

const categorias2 = db1.define(
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

module.exports = categorias2