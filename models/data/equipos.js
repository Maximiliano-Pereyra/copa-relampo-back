let equipos = [
    {
        nombre: 'Viejas Glorias',
        fotoGrupal: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-SOL-NEGRO-1_550x.png?v=1566724113',
        escudo: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-SOL_2d929f0a-7169-4877-ac13-8737dbcdf635_550x.png?v=1566724113',
        jugadores: ['Manolo Gustavo', 'Cardona Alejandro', 'Claudio Pinola', 'Montiel Cruz'],
        predio: ['Complejo America', 'Sol de Mayo'],
        titulos:['Copa de Plata', 'Copa de Oro']
    },
    {
        nombre: 'La Tala',
        fotoGrupal: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-SOL-NEGRO-1_550x.png?v=1566724113',
        escudo: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-SOL_2d929f0a-7169-4877-ac13-8737dbcdf635_550x.png?v=1566724113',
        jugadores: ['Manolo Gustavo', 'Cardona Alejandro', 'Claudio Pinola', 'Montiel Cruz'],
        predio: [ 'Sol de Mayo'],
        titulos:['']
    },
    {
        nombre: 'Celta de Vino',
        fotoGrupal: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-SOL-NEGRO-1_550x.png?v=1566724113',
        escudo: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-SOL_2d929f0a-7169-4877-ac13-8737dbcdf635_550x.png?v=1566724113',
        jugadores: ['Manolo Gustavo', 'Cardona Alejandro', 'Claudio Pinola', 'Montiel Cruz'],
        predio: ['Complejo America', 'Sol de Mayo', 'Elenia'],
        titulos:['Copa de Plata','Copa de Plata','Copa de Plata','Copa de Oro','Super Copa']
    },
    {
        nombre: 'La Peña',
        fotoGrupal: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/HOODIES-SOL-NEGRO-1_550x.png?v=1566724113',
        escudo: 'https://cdn.shopify.com/s/files/1/0015/5841/3357/products/MODEL-HOODIE-SOL_2d929f0a-7169-4877-ac13-8737dbcdf635_550x.png?v=1566724113',
        jugadores: ['Manolo Gustavo', 'Cardona Alejandro', 'Claudio Pinola', 'Montiel Cruz'],
        predio: ['Elenia'],
        titulos:['Copa de Plata']
    }
]

require('dotenv').config()
require('../../config/database')

const Equipo = require('../equipo')

equipos.forEach(item => {
    Equipo.create({
        nombre: item.nombre,
        fotoGrupal: item.fotoGrupal,
        escudo: item.escudo,
        jugadores: item.jugadores,
        predio: item.predio,
        titulos: item.titulos
    })
})