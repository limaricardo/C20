const Carrinho = require('../models/Carrinho');

const findAllCarrinhoService = async () => {
  const allCarrinho = await Carrinho.find();
  return allCarrinho;
};

const createManyItemsCarrinhoService = async (newCarrinho) => {
  const createdCarrinho = await Carrinho.insertMany(newCarrinho);
  return createdCarrinho;
};

const deleteAllItemsCarrinhoService = async () => {
  return await Carrinho.deleteMany();
};

module.exports = {
  findAllCarrinhoService,
  createManyItemsCarrinhoService,
  deleteAllItemsCarrinhoService,
};
