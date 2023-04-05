const categorias1 = require('../models/categorias')
const bcrypt = require('bcryptjs')

//Listar todos produtos
const categoriasController1 = {
  listarCategoria: async (_req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: unknown }): void; new(): any } } }) => {
    try {
      const listacategoria = await categorias1.findAll()
      res.status(200).json(listacategoria)
    } catch (error) {
      console.log(error)
      res.status(404).json({ error })
    }
  },

  //Listar categoria por ID
  async listarcategoriaId(req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
    try {
      const { id } = req.params
      const listaDecategorias = await categorias1.findAll({
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
      res.status(404).json("error")
    }
  },

 //Cadastrar categoria
 async cadastrarcategoria(req: { body: { nome: any; descricao: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
  try {
    const { nome, descricao } = req.body
    const casdastracategoria = await categorias1.create({
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
    res.status(400).json("error")
  }
},

  //Atualizar categoria
  async atualizarcategoria(req: { params: { id: any; }; body: { nome: any; descricao: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
    try {
      const { id } = req.params
      const { nome, descricao } = req.body

      const Atualizacategoria = await categorias1.findOne({
        where: {
          id: id
        }
      })

      if (!Atualizacategoria) {
        res
          .status(400)
          .json('Houve um erro na requisição. Por favor, tente novamente.')
      } else {
        await categorias1.update({ nome, descricao }, { where: { id } })
      }

      res
        .status(200)
        .json(`Informações da categoria ${nome} atualizadas com sucesso!`)
    } catch (error) {
      res.status(400).json("error")
    }
  },

  // Deletando categoria
  async deletarcategoria(req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; sendStatus: (arg0: number) => void; }) {
    try {
      const { id } = req.params
      const deletandocategoria = await categorias1.destroy({
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
      return res.status(400).json("error")
    }
  }
}

module.exports = categoriasController1
