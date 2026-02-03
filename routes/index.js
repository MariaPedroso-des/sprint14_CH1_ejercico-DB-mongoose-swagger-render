//Este es el distribuidor. Es el router principal que AGRUPA SUBRRUTAS. 

//SOLO ORGANIZA

//Por ejemplo: TODO LO QUE ENTRE AQUÍ, PÁSALO A TASKSROUTES



const express = require('express');
const router = express.Router();
const tasksRoutes = require('./tasks');

router.use('/', tasksRoutes);

module.exports = router;