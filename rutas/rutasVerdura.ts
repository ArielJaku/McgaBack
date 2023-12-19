import express, { Express} from "express";
const verduraController = require('../controladores/controladorVerdura');
const rutas = express.Router();

rutas.get('/',verduraController.verdura_get);
rutas.post('/',verduraController.verdura_post);
rutas.put('/:id',verduraController.verdura_update)
rutas.delete('/:id',verduraController.verdura_delete)


module.exports = rutas;