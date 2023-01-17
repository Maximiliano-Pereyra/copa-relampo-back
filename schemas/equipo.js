const joi = require("joi");

const schema = joi.object({
  nombre: joi.string().required().messages({
    "any.required":"el campo nombre es obligatorio",
  }),
  fotoGrupal: joi.string().required().uri().messages({
    "any.required": "el campo foto1 es obligatorio",
    "string.empty": "Coloca el URL de la foto",
  }),
  escudo: joi.string().required().uri().messages({
    "any.required": "el campo foto2 es obligatorio",
    "string.empty": "Coloca el URL de la foto",
  }),
  jugadores: joi.array().required().messages({
    "any.required":"el campo talle es obligatorio",
  }),
  predio: joi.array().required().messages({
    "any.required":"el campo stock es obligatorio",
  }),
  titulos: joi.array().required().messages({
    "any.required":"el campo stock es obligatorio",
  }),
 
});

module.exports = schema;