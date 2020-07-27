const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: { type: String, required: [true, "El nombre es necesario"] },
    precioUni: {
        type: Number,
        required: [true, "El precio únitario es necesario"],
    },
    descripcion: { type: String, required: false },
    disponible: { type: Boolean, required: true, default: true },
    categoria: { type: Schema.Types.ObjectId, ref: "Categoria", required: true },
    usuario: { type: Schema.Types.ObjectId, ref: "Usuario" },
});
// para que agregue la validación de cada uno de los atributos
productoSchema.plugin(uniqueValidator, { message: "{PATH} debe ser unico" });

module.exports = mongoose.model("Producto", productoSchema);