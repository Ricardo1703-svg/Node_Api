const { Router } = require('express')
const router = Router()

const { ObtenerUsuario, CrearUsuario, ObtenerUsuarioporID, EliminarUsuario,
    ActualizarUsuario} = require('../controllers/index.controller')

router.get('/users', ObtenerUsuario)
router.get('/users/:id', ObtenerUsuarioporID)
router.post('/users', CrearUsuario)
router.delete('/users/:id', EliminarUsuario)
router.put('/users/:id', ActualizarUsuario)

module.exports = router