const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    fotoGrupal: {type: String, required: true},
    escudo: {type: String, required: true},
    jugadores: [{type: String, required: true}],
    predio: [{type: String, required: true}],
    titulos: [{type: String, required: false}]
})

const Equipo = mongoose.model('equipos',schema)
module.exports = Equipo