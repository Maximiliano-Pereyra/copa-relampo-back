const Jugador = require('../models/Jugador')

const controller = {

    create: async (req, res) => {
        try {
            let newJugador = await Jugador.create(req.body)
            res.status(201).json({
                place: newJugador.place,
                success: true,
                message: "se cargo el articulo de manera exitosa"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async (req, res) => {
        let query = {}
        let order = {}

        if (req.query.order) {
            order = { precio: req.query.order }
        }

        if (req.query.userId) {
            query = {
                ...query,
                userId: req.query.userId
            }
        }
        if (req.query._id) {
            query = {
                ...query,
                _id: req.query._id
            }
        }
        if (req.query.nombre) {
            query = {
                ...query,
                nombre: { $regex: req.query.nombre, $options: "i"}
            }
        }
        try {
            let todosJugadores = await Jugador.find(query).sort(order)
            if (todosJugadores){
                res.status(200).json({
                    res: todosJugadores,
                    success: true,
                    message: "Se encontraron Jugadores de manera exitosa"
                })
            }
            else{
                res.status(404).json({
                    success: false,
                    message: "No se encontraron Jugadores, intente de nuevo!"
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    readOne: async (req, res) => {
        let id = req.params.id;
        try {
            let findJugador = await Jugador.findOne({ _id: id });
            if (findJugador) {
                res.status(200).json({
                    message: "Jugador encontrado",
                    response: findJugador,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "No se puede encontrar el Jugador",
                    success: false,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    },
    update: async (req, res) => {
        let { id } = req.params
        try {
            let JugadorU = await Jugador.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (JugadorU) {
                res.status(200).json({
                    id: JugadorU._id,
                    success: true,
                    message: "se modificaron los datos del Jugador de manera exitosa"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "no se encontro el Jugador"
                })
            }

        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req, res) => {
        let { id } = req.params
        try {
            let JugadorD = await Jugador.findOneAndDelete({ _id: id })
            if (JugadorD) {
                res.status(200).json({
                    id: JugadorD._id,
                    success: true,
                    message: "se elimino el Jugador de manera exitosa"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no se encontro el Jugador"
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = controller