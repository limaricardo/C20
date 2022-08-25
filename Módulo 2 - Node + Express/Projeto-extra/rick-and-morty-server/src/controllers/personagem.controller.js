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

  const chosenPersonagem = personagemService.findCharacterByIdService(idParam)

  if(!chosenPersonagem) {
    return res.status(404).send({ message: "Personagem não encontrado!"})
  }

  res.send(chosenPersonagem)
}

const updateCharacterController = (req, res) => {
  const idParam = Number(req.params.id)
  const characterEdit = req.body

  if(!idParam) {
    return res.status(404).send({ message: "Personagem não encontrado!"})
  }

  if (!characterEdit || !characterEdit.url || !characterEdit.name) {
    return res.status(400).send({ message: "Você não preencheu todos os dados!"})
  }

  res.send(personagemService.updateCharacterService(idParam, characterEdit))
}

const deleteCharacterController = (req, res) => {
  const idParam = Number(req.params.id)

  if(!idParam) {
    return res.status(404).send({ message: "Personagem não encontrado!"})
  }

  const personagem = personagemService.deleteCharacterService(idParam)

  if(!personagem) {
    return res.status(404).send({ message: "Personagem não encontrado!"})
  }

  res.send({ message: `Personagem ${personagem.name} deletado com sucesso`})
}


module.exports = { 
  findAllCharactersController,
  findCharacterByIdController,
  checkIdController,
  updateCharacterController,
  deleteCharacterController
}