const joi = require("joi");

const schema = joi.object({
  nombre: joi.string().required().messages({
    "any.required":"el campo nombre es obligatorio",
  }),
  goles: joi.number().required().messages({
    "any.required":"el campo nombre es obligatorio",
  }),
  asistencias: joi.number().required().messages({
    "any.required":"el campo nombre es obligatorio",
  }),
  equipo: joi.array().required().messages({
    "any.required":"el campo stock es obligatorio",
  }),

});

module.exports = schema;