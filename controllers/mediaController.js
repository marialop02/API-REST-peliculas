const Media = require('../models/Media');
const Genero = require('../models/Genero');
const Director = require('../models/Director');
const Productora = require('../models/Productora');
const Tipo = require('../models/Tipo');

const { request, response } = require('express');

/* Obtener todas las producciones (Peliculas/Series) */

const getMedias = async (req = request , res = response) => {
    try {
        const medias = await Media.find()
            .populate('genero', 'nombre estado')
            .populate('director', 'nombre estado')
            .populate('productora', 'nombre estado Slogan')
            .populate('tipo', 'nombre');

        res.status(200).json(medias);
    } catch (error) {
        console.error('Error al obtener las producciones:', error);
        res.status(500).json({ msg: 'Ocurrió un error al listar las producciones'});
    }
}

/* Crear una nueva producción con validaciones de estado activo */

const createMedia = async (req = request, res = response) => {
    try {
        const { serial, urlPelicula, genero, director, productora, tipo } = req.body;
        
        // Validaciones de Unicidad (Serial y URL)

        const existeSerial = await Media.findOne({ serial });
        if (existeSerial) return res.status(400).json({ msg: 'El serial ya está registrado' });

        const existeUrl = await Media.findOne({ urlPelicula });
        if (existeUrl) return res.status(400).json({ msg: 'La URL ya está en uso' });

        //Validaciones de "Solo Activos" (Requerimientos IX, X, XI)

        const [generoDB, directorDB, productoraDB, tipoDB] = await Promise.all([
            Genero.findOne({ _id: genero, estado: 'Activo' }),
            Director.findOne({ _id: director, estado: 'Activo' }),
            Productora.findOne({ _id: productora, estado: 'Activo' }),
            Tipo.findById(tipo) // 
        ]);

        if (!generoDB) return res.status(400).json({ msg: 'Género inactivo o no existe' });
        if (!directorDB) return res.status(400).json({ msg: 'Director inactivo o no existe' });
        if (!productoraDB) return res.status(400).json({ msg: 'Productora inactiva o no existe' });
        if (!tipoDB) return res.status(400).json({ msg: 'El tipo seleccionado no existe' });

        //Guardar Producción

        const media = new Media(req.body);
        await media.save();
        
        res.status(201).json(media);

    } catch (error) {
        console.error('Error al crear producción:', error);
        res.status(500).json({ msg: 'Error al guardar la producción' });
    }
}

module.exports = {
    getMedias,
    createMedia
}