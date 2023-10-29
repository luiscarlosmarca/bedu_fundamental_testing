// Importa la función 'login' desde un módulo llamado "Login".
const { login } = require("./Login");

// Importa los módulos 'express' y 'body-parser'.
const express = require('express');
const bodyParser = require('body-parser');

// Define el número de puerto en el que el servidor escuchará.
const port = 5000;

// Crea una instancia de la aplicación Express.
const app = express();

// Configura el middleware 'body-parser' para procesar datos en solicitudes POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Define una ruta para las solicitudes GET a la raíz ('/') del servidor.
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define una ruta para las solicitudes POST a '/login'.
app.post('/login', (req, res) => {
    // Obtiene las credenciales del usuario desde el cuerpo de la solicitud POST.
    const userCredentials = { email: req.body.email, password: req.body.password };
    // Llama a la función 'login' para autenticar al usuario y obtiene una respuesta.
    const response = login(userCredentials);
    // Envía la respuesta al cliente que hizo la solicitud.
    res.send(response);
});

// Inicia el servidor y lo configura para escuchar en el puerto especificado.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
