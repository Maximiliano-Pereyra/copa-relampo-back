const Equipo = require('../models/Equipo')

const controller = {

    create: async (req, res) => {
        try {
            let newEquipo = await Equipo.create(req.body)
            res.status(201).json({
                team: newEquipo.team,
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
            let todosEquipos = await Equipo.find(query).sort(order)
            if (todosEquipos){
                res.status(200).json({
                    res: todosEquipos,
                    success: true,
                    message: "Se encontraron Equipos de manera exitosa"
                })
            }
            else{
                res.status(404).json({
                    success: false,
                    message: "No se encontraron Equipos, intente de nuevo!"
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
            let findEquipo = await Equipo.findOne({ _id: id });
            if (findEquipo) {
                res.status(200).json({
                    message: "Equipo encontrado",
                    response: findEquipo,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "No se puede encontrar el Equipo",
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
            let EquipoU = await Equipo.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (EquipoU) {
                res.status(200).json({
                    id: EquipoU._id,
                    success: true,
                    message: "se modificaron los datos del Equipo de manera exitosa"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "no se encontro el Equipo"
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
            let EquipoD = await Equipo.findOneAndDelete({ _id: id })
            if (EquipoD) {
                res.status(200).json({
                    id: EquipoD._id,
                    success: true,
                    message: "se elimino el Equipo de manera exitosa"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no se encontro el Equipo"
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