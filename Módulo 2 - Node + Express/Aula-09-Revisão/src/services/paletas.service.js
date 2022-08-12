const Paleta = require('../models/Paleta');
  
  const findPaletasService = async () => {
    const paletas = await Paleta.find();
    return paletas;
  };
  
  const findPaletaByIdService = async (id) => {
    return await Paleta.findById(id);
  };

  const createPaletaService = async (newPaleta) => {
    return await Paleta.create(newPaleta)
  };

  const updatePaletaService = async (id, paletaEdited) => {
    return await Paleta.findByIdAndUpdate(id, paletaEdited, { returnDocument: "after" });
  };

  const deletePaletaService = async (id) => {
    return await Paleta.findByIdAndDelete(id);
  };
  
  module.exports = {
    findPaletasService,
    findPaletaByIdService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService
  };