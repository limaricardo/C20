const personagens = [
  {
    id: 1,
    name: "Rick",
    url: "www"
  },
  {
    id: 2,
    name: "Morty",
    url: "http"
  }
]

const findAllUsersService = () => {
  return personagens
}

const findCharacterByIdService = (id) => {
  return personagens.find((personagem) => personagem.id == id)
}

const updateCharacterService = (idParam, characterEdit) => {
  characterEdit['id'] = idParam
  personagens[personagens.findIndex((personagem) => personagem.id == idParam)] = characterEdit 
  return characterEdit
}

const deleteCharacterService = (idParam) => {
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == idParam)
  const personagem = personagens[personagemIndex]

  if(personagemIndex != -1){
    personagens.splice(personagemIndex, 1)
  }
  return personagem
}


module.exports = {
  findAllUsersService,
  findCharacterByIdService,
  updateCharacterService,
  deleteCharacterService
}