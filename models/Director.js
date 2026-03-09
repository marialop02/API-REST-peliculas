/* Permitirá registrar y editar el director principal (solo uno, pues como sabemos, pueden ser varios) de la producción. Se necesitará guardar la siguiente información:
# I. Nombres
# II. Estado (Activo o Inactivo)
# III. Fecha de creación
# IV. Fecha de actualización*/


const { Schema, model } = require('mongoose');

const DirectorSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
        trim: true,
    },
    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
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
    }
})

module.exports = model('Director', DirectorSchema);