const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
  nombre: { type: String, required: true, max: 60 },
  p_apellido: { type: String, required: true, max: 40 },
  s_apellido: { type: String, required: true, max: 40 },
  telefono: { type: String, required: true, max: 15 },
  mail: { type: String, required: false, max: 70 },
  direccion: { type: String, required: true, max: 150 },
  profesion: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model("empleados", EmpleadosSchema);
