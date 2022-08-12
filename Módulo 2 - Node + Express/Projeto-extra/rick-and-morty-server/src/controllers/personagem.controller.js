const { reset } = require('nodemon');
const personagemService = require('../services/personagem.service')

const findAllCharactersController = (req, res) => {
  res.send(personagemService.findAllUsersService());
}

const checkIdController = (req, res) => {
  res.status(400).send({ message: "Id não informado! Por favor, informe na URL"})
}

const findCharacterByIdController = (req, res) => {
  const idParam = req.params.id

  const chosenPersonagem =  personagemService.findCharacterByIdService(idParam)

  if(!chosenPersonagem) {
    return res.status(404).send({ message: "Personagem não encontrado!"})
  }

  res.send(chosenPersonagem)
}


module.exports = { 
  findAllCharactersController,
  findCharacterByIdController,
  checkIdController,
}