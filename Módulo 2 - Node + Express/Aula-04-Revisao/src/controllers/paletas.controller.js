const paletasService = require('../services/paletas.service');

const findPaletasController = (req, res) => {
  const allPaletas = paletasService.findPaletasService();
  res.send(allPaletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletasService.findPaletaByIdService(idParam);
  res.send(chosenPaleta);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};
  
const updatePaletaController = (req, res) => {
  const idParam = +req.params.id;
  const paletaEdit = req.body;
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = +req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController
};