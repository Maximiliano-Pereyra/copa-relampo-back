let jugadores=[
    {
      nombre:'Manolo Gustavo',
      goles:12,
      asistencias:2,
      equipo:['Celta de Vino']  
    },
    {
        nombre:'Cardona Alejandro',
        goles:3,
        asistencias:34,
        equipo:['La Peña','La Tala'] 
    },
    {
        nombre:'Claudio Pinola',
        goles:1,
        asistencias:1,
        equipo:['Viejas Glorias'] 
    },
    {
        nombre:'Montiel Cruz',
        goles:0,
        asistencias:0,
        equipo:['La Peña'], 
    }
]

require('dotenv').config()
require('../../config/database')

const Jugador = require('../jugador')

jugadores.forEach(item => {
    Jugador.create({
        nombre: item.nombre,
        goles: item.goles,
        asistencias: item.asistencias,
        equipo: item.equipo,
    })
})