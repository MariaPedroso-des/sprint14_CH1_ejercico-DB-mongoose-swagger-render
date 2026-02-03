//Aquí levantamos el servidor Express, conectamos la base de datos, montamos las rutas y la doc Swagger

//Aquí creo la app Express que es mi servidor
const express = require('express');
const app = express();

//Puerto donde corre la app || si no hay variable de entorno, usamos la 3000
const PORT = process.env.PORT || 3000;

//Importamos la función que conecta MongoDB que se llama más abajo con dbConnection()
const { dbConnection } = require('./config/config');

//Importamos todas las rutas, que a su vez llama a tasks.js
const routes = require('./routes');


//Middleware que permite recibir .json en req.body. SIEMPRE CON POST Y PUT
app.use(express.json());


//Integramos Swagger y docs describe todos los endpoints. Se accede a la doc con http://localhost:300/api-docs
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

//Montamos las rutas. Esto redirige
app.use('/', routes);

dbConnection();


//El servidor arranca en el puerto que hemos definido 
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));