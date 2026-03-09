/* Este módulo se encargará de gestionar (agregado, edición, borrado, consulta) las producciones (películas y series, por ahora). Para este, se almacenará la siguiente información:
I. Serial: único
II. Titulo
III. Sinopsis
IV. URL de la película: único
V. Imagen o foto de portada
VI. Fecha de creación
VII. Fecha de actualización
VIII. Año de estreno
IX. Género principal: Para agregar la película el sistema permite seleccionar solo géneros activos definidos en el Módulo de Género 
X. Director principal: Para agregar la película el sistema permite seleccionar solo directores activos definidos en el Módulo de Director
XI. Productora: Para agregar la película el sistema permite seleccionar solo productoras activas definidas en el Módulo de Productora
XII. Tipo: Para agregar la película el sistema permite seleccionar solo tipos definidos en el Módulo de Tipo */

const { Schema, model } = require('mongoose');

const MediaSchema = Schema ({
    serial: {
        type: String,
        required: [true, 'El serial es obligatorio'],
        unique: true,
        trim: true,
    },
    titulo: {
      type: String,
      required: [true, "El título es obligatorio"],
      trim: true,
    },
    sinopsis: {
      type: String,
      required: [true, "La sinopsis es obligatoria"],
      trim: true,
    },
    urlPelicula: {
      type: String,
      required: [true, "La URL de la película es obligatoria"],
      unique: true,
      trim: true,
      match: [
        /^(https?:\/\/)[^\s$.?#].[^\s]*$/i,
        "Debe ingresar una URL válida",
      ],
    },
    imagenPortada: {
      type: String,
      required: [true, "La imagen o foto de portada es obligatoria"],
      trim: true,
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        required: true,
        default: Date.now
    },
    anoEstreno: {
      type: Number,
      required: [true, "El año de estreno es obligatorio"],
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true,
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true,
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true,
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true,
    }
})

module.exports = model('Media', MediaSchema);