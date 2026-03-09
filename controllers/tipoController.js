const Tipo = require('../models/Tipo');

const { request, response } = require('express');

/* Obtener todos los tipos */

const getTipos = async (req = request , res = response) => {
    try {
        const tipos = await Tipo.find();
        res.status(200).json(tipos);
    } catch (error) {
        console.error('Error al obtener los tipos:', error);
        res.status(500).json({ msg: 'Ocurrió un error al listar los tipos'});
    }
}

/* Crear un nuevo tipo (Película, Serie, etc.) */

const createTipo = async (req = request, res = response) => {
    try {
        const { nombre, descripcion } = req.body;
        
        // Validación: Verificar si el tipo ya existe para evitar duplicados

        const tipoDB = await Tipo.findOne({ nombre });
        if (tipoDB) {
            return res.status(400).json({ msg: 'El tipo "${nombre}" ya existe.'});
        }

        const tipo = new tipo ({ nombre, descripcion });

        await tipo.save();
        res.status(201).json(director);

    } catch (error) {
        console.error('Error al crear tipo', error);
        res.status(500).json({ msg: 'Ocurrió un error al guardar el tipo'});
    }
}

module.exports = {
    getTipos,
    createTipo
}