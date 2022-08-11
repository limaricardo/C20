const paletasService = require('../services/paletas.service');

const findPaletasController = (req, res) => {
  res.send(paletasService.findPaletasService());
};

const checkId = (req, res) => {
  res.status(400).send({ message: "ID não informado!" })
}

const findPaletaByIdController = (req, res) => {

  if (!req.params.id) {
    return res.status(400).send({ message: "ID não informado!" })
  }

  const chosenPaleta = paletasService.findPaletaByIdService(req.params.id);

  if (!chosenPaleta) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }

  res.send(chosenPaleta);
};

const createPaletaController = (req, res) => {
  if (
    !req.body ||
    !req.body.sabor ||
    !req.body.descricao ||
    !req.body.foto ||
    !req.body.preco
  ) {
    return res.status(400).send({ mensagem: "Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!" });
  }
  res.send(paletasService.createPaletaService(req.body));
};
  
const updatePaletaController = (req, res) => {
  if (!req.params.id) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }

  if (!req.body || !req.body.sabor || !req.body.descricao || !req.body.foto || !req.body.preco) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar a paleta!" });
  }

  res.send(paletasService.updatePaletaService(+req.params.id, req.body));
};

const deletePaletaController = (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: "Id invalido, tente novamente!" });
  }
  const paleta = paletasService.deletePaletaService(+req.params.id);

  if(!paleta){
    return res.status(404).send({ message: "Paleta não encontrada" });
  }
  res.send({ message: `Paleta ${paleta.sabor} deletada com sucesso!` });
};
module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
  checkId
};