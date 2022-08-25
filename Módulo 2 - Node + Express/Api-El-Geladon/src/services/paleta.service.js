const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find();
  return allPaletas;
};

const findByIdPaletaService = async (idParam) => {
  const onePaleta = await Paletas.findById(idParam);
  return onePaleta;
};

const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paletas.create(newPaleta);
  return createdPaleta;
};

const updatePaletaService = async (idParam, editPaleta) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam, editPaleta);
  return updatePaleta;
};

const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
