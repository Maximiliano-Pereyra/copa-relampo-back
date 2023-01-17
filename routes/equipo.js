let router = require('express').Router()
const schema = require('../schemas/equipo')
const validatorEquipo = require('../middlewares/validadorEquipo')

let {create, read, update, destroy, readOne} = require('../controllers/equipo')

router.route('/').get(read)
router.route('/').post(validatorEquipo(schema),create)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router