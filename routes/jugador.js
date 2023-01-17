let router = require('express').Router()
const schema = require('../schemas/jugador')
const validatorJugador = require('../middlewares/validadorJugador')

let {create, read, update, destroy, readOne} = require('../controllers/jugador')

router.route('/').get(read)
router.route('/').post(validatorJugador(schema),create)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router