/* Permitirá registrar y editar la productora principal de la producción (Disney, Warner, Paramount, MGM, …). Se guardará la siguiente información para este módulo:
I. Nombre de la productora
II. Estado (Activo o Inactivo)
III. Fecha de creación
IV. Fecha de actualización
V. Slogan
VI. Descripción */

const { Schema, model } = require('mongoose');

const ProductoraSchema = Schema ({
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
    },
    Slogan: {
        type: String,
        required: [true, 'El slogan es obligatorio'],
        trim: true 
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true
    }
})

module.exports = model('Productora', ProductoraSchema);