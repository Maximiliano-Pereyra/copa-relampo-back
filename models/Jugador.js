const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    goles: {type: Number, required: true},
    asistencias: {type: Number, required: true},
    equipo: [{type: String, required: true}],
})

const Jugador = mongoose.model('jugadores',schema)
module.exports = Jugador