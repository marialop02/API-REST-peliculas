/* Permitirá registrar los tipos de multimedia, por ahora se tendrán: serie y película, pero se podrán gestionar otros deseados a futuro. Se guardará la siguiente información:
I. Nombre
II. Fecha de creación
III. Fecha de actualización
IV. Descripción */

const { Schema, model } = require('mongoose');

const TipoSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
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
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true
    }
})

module.exports = model('Tipo', TipoSchema);