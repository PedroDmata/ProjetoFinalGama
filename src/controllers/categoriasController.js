const categorias = require('../models/categorias')
const bcrypt = require('bcryptjs')

//Listar todos produtos
const categoriasController = {
  listarCategoria: async (req, res) => {
    try {
      const listacategoria = await categorias.findAll()
      res.status(200).json(listacategoria)
    } catch (error) {
      console.log(error)
      res.status(404).json({ error })
    }
  },

  //Listar categoria por ID
  async listarcategoriaId(req, res) {
    try {
      const { id } = req.params
      const listaDecategorias = await categorias.findAll({
        where: {
          id
        }
      })

      if (!listaDecategorias) {
        return res.status(404).json('Id não encontrado')
      } else {
        res.status(200).json(listaDecategorias)
      }
    } catch (error) {
      res.status(404).json({ error })
    }
  },

 //Cadastrar categoria
 async cadastrarcategoria(req, res) {
  try {
    const { nome, descricao } = req.body
    const casdastracategoria = await categorias.create({
      nome,
      descricao
    })

    if (!casdastracategoria) {
      res
        .status(400)
        .json('Houve um erro na requisição. Por favor, tente novamente.')
    } else {
      res.status(201).json(`Categoria ${nome} cadastrado com sucesso!`)
    }
  } catch (error) {
    res.status(400).json({ error })
  }
},

  //Atualizar categoria
  async atualizarcategoria(req, res) {
    try {
      const { id } = req.params
      const { nome, descricao } = req.body

      const Atualizacategoria = await categorias.findOne({
        where: {
          id: id
        }
      })

      if (!Atualizacategoria) {
        res
          .status(400)
          .json('Houve um erro na requisição. Por favor, tente novamente.')
      } else {
        await categorias.update({ nome, descricao }, { where: { id } })
      }

      res
        .status(200)
        .json(`Informações da categoria ${nome} atualizadas com sucesso!`)
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  // Deletando categoria
  async deletarcategoria(req, res) {
    try {
      const { id } = req.params
      const deletandocategoria = await categorias.destroy({
        where: {
          id
        }
      })
      if (!deletandocategoria) {
        res.status(404).json('Id não encontrado')
      } else {
        res.sendStatus(204)
      }
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

module.exports = categoriasController
