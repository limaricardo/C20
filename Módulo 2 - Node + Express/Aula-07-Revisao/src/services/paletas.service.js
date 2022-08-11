const paletas = [
    {
      id: 1,
      sabor: 'Açaí com Leite Condensado',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/acai-com-leite-condensado.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Banana com Nutella',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/banana-com-nutella.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Chocolate Belga',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/chocolate-belga.png',
      preco: 7.0,
    },
  ];
  
  const findPaletasService = () => {
    return paletas;
  };
  
  const findPaletaByIdService = (id) => {
    return paletas.find((paleta) => paleta.id == id);
  };

  const createPaletaService = (newPaleta) => {
    newPaleta.id = Math.max(...paletas.map(o => o.id)) +1;
    paletas.push(newPaleta);
    return newPaleta;
  };

  const updatePaletaService = (id, paletaEdited) => {
    paletaEdited['id'] = id;
    paletas[paletas.findIndex((paleta) => paleta.id == id)] = paletaEdited;
    return paletaEdited;
  };

  const deletePaletaService = (id) => {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    const paleta = paletas[paletaIndex];
    if(paletaIndex != -1){
      paletas.splice(paletaIndex, 1);
    }
    
    return paleta;
  };
  
  module.exports = {
    findPaletasService,
    findPaletaByIdService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService
  };