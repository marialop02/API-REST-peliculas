const Productora = require('../models/Productora');

const { request, response } = require('express');

/* Obtener todas las productoras */

const getProductoras = async (req = request , res = response) => {
    try {
        const productoras = await Productora.find();
        res.status(200).json(productoras);
    } catch (error) {
        console.error('Error al obtener las productoras:', error);
        res.status(500).json({ msg: 'Ocurrió un error al listar las productoras'});
    }
}

/* Crear una nueva productora */

const createProductora = async (req = request, res = response) => {
    try {
        const { nombre, slogan, descripcion } = req.body;
        
        // Validación: Verificar si la productora ya existe para evitar duplicados

        const productoraDB = await Productora.findOne({ nombre });
        if (productoraDB) {
            return res.status(400).json({ msg: 'La productora "${nombre}" ya existe.'});
        }

        const productora = new Productora({ nombre, slogan, descripcion });

        await productora.save();
        res.status(201).json(director);

    } catch (error) {
        console.error('Error al crear productora', error);
        res.status(500).json({ msg: 'Ocurrió un error al guardar la productora'});
    }
}

module.exports = {
    getProductoras,
    createProductora
}