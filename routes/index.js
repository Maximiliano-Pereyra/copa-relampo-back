var express = require('express');
var router = express.Router();

let equipos = require('./equipo')
let jugadores = require('./jugador')

router.use("/api/equipo", equipos);
router.use("/api/jugador", jugadores);

module.exports = router;
