const categorias3 = require('./categorias')
const produtos1 = require('./produtos')

produtos1.belongsTo(categorias1, {
  foreignKey: 'id_categoria'
});


 categorias3.hasMany(produtos1, {
   foreignKey: 'psicologo_id'
 });



module.exports = {
  categorias3,
  produtos1,
}
