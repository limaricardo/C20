const express = require('express')
const router = express.Router();
const personagemController = require('../controllers/personagem.controller');

// Rotas de Users
// router.get('/users', personagemController.findAllUsersController)
// router.post('/users/create', personagemController.createUserController)

// Rota de Auth
// router.post('/auth/login', personagemController.authController)

// Rotas de Characters
router.get('/characters', personagemController.findAllCharactersController)
router.get('/characters/find/', personagemController.checkIdController)
router.get('/characters/find/:id', personagemController.findCharacterByIdController)
// router.get('/characters/search/', personagemController.searchCharacterController)


// router.post('/characters/create', personagemController.createCharacterController)

// router.put('/characters/update/:id', personagemController.updateCharacterController)

// router.delete('/characters/delete/:id', personagemController.deleteCharacterController)


module.exports = router;