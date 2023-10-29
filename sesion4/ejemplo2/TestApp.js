// Importa el módulo 'axios', que se utiliza para realizar solicitudes HTTP.
const axios = require('axios');

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

// Define una función 'makeApiCall' que realiza una solicitud GET a una URL.
const makeApiCall = async () => {
    // Realiza una solicitud GET a la URL 'http://localhost:3000' utilizando Axios y espera la respuesta.
    const response = await axios.get('http://localhost:3000');
    // Devuelve los datos de la respuesta.
    return response.data;
}

// Define una función de prueba 'testReturnsHelloWorld'.
const testReturnsHelloWorld = async () => {
    // Define el mensaje esperado que se espera recibir de la API.
    const expectedMessage = "Hello World!";
    // Realiza una prueba llamando a 'executeTest' con la función 'makeApiCall' y el mensaje esperado.
    await executeTest({}, expectedMessage, makeApiCall);
}

// Llama a la función de prueba 'testReturnsHelloWorld'.
testReturnsHelloWorld();
