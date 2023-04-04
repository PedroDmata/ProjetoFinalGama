const categorias = require('./categorias')
const produtos = require('./produtos')

produtos.belongsTo(categorias, {
  foreignKey: 'id_categoria'
});


 categorias.hasMany(produtos, {
   foreignKey: 'psicologo_id'
 });



module.exports = {
  categorias,
  produtos,
}
