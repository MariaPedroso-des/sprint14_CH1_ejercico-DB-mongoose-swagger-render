//Model es la herramienta para operar con MongoDB

// ¡Swagger DOCUMENTA, MongoDB VALIDA!

//Tipos comunes en Mongoose: String, Boolean, Number, Date, Array, ObjectId

//Además de title y completed, usaremos required, default y trim entre otros.

//Modelo de datos de Mongoose de como se guardan los Tasks en MongoDB
// new mongoose.Schema() define los campos que tiene un Task
// { timestamps: true } con esto es con lo hacemos que Mongoose añada automáticamente createdAt y updatedAt
// mongoose.model registra el modelo en mongoose y crea la colección tasks en MongoDB

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;