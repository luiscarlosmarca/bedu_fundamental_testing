// Importa el módulo 'axios' para realizar solicitudes HTTP y la función 'login' desde un módulo llamado "Login".
const axios = require('axios');
const { login } = require("./Login");

// Define una función 'executeTest' que toma una entrada, una salida esperada y una función para ejecutar.
const executeTest = async (input, expectedOutput, functionToExecute) => {
    // Ejecuta la función asincrónica y espera su resultado.
    const actualOutput = await functionToExecute(input);

    // Compara la salida real con la salida esperada y muestra un mensaje de éxito o fallo.
    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`);
    } else {
        console.log("Test pass");
    }
}

// Define una función 'makePostApiCall' que realiza una solicitud POST a la URL 'http://localhost:5000/login'.
const makePostApiCall = async (userCredentials) => {
    // Realiza una solicitud POST a la URL 'http://localhost:5000/login' con las credenciales del usuario y espera la respuesta.
    const response = await axios.post('http://localhost:5000/login', userCredentials);
    // Devuelve los datos de la respuesta.
    return response.data;
}

// Define funciones de prueba que utilizan 'executeTest' para verificar respuestas de la API.
const testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
   // Crear un arrary con los diferentes casos de prueba
    const userCredentials = { email: "myemail@mail.com", password: "securePassword" };
    const successMessage = "Bienvenido al sistema";
    executeTest(userCredentials, successMessage, makePostApiCall);
}

const testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = { email: "myemail@mail.com", password: "invalidPassword" };
    const successMessage = "Contraseña incorrecta";
    executeTest(userCredentials, successMessage, makePostApiCall);
}

const testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = { email: "unregistered_user@mail.com", password: "securePassword" };
    const successMessage = "Usuario no registrado";
    executeTest(userCredentials, successMessage, makePostApiCall);
}

// Ejecuta las funciones de prueba.
testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword();
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword();
testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword();
