const { Router } = require('express')
const router = Router();
const usersController = require ('../controllers/usersController')

router.route('/')
    .get (usersController.getUsers) // Obtiene todos los usuarios
    .post (usersController.createUser);

router.route('/:id')
    .get (usersController.getUser) // Obtiene 1 usuario
    .put (usersController.updateUser)
    .delete (usersController.deleteUser);

module.exports = router;
