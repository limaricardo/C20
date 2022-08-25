const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({
  paletaId: {
    type: String,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
});

const Carrinho = mongoose.model('carrinho', CarrinhoSchema);

module.exports = Carrinho;
