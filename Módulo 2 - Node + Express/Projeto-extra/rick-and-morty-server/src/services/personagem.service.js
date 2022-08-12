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

module.exports = {
  findAllUsersService,
  findCharacterByIdService,
}