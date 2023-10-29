// Importa el módulo 'express' que proporciona funcionalidades para crear un servidor web.
const express = require('express');

// Crea una instancia de la aplicación Express.
const app = express();

// Define el número de puerto en el que el servidor escuchará.
const port = 4000;

// Maneja solicitudes GET a la ruta raíz ('/') del servidor.
app.get('/', (req, res) => {
    // Envía la respuesta 'Hello World!' cuando se accede a la ruta raíz.
    res.send('Hello World!');
});

// Inicia el servidor y lo configura para escuchar en el puerto especificado.
app.listen(port, () => {
    // Muestra un mensaje en la consola indicando la dirección en la que el servidor está escuchando.
    console.log(`Example app listening at http://localhost:${port}`);
});
