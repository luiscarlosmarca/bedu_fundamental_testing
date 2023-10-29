// Importa la función 'login' desde el módulo "Login"
const { login } = require("./Login");

// Define una función llamada 'executeTest' que toma datos de entrada, resultado esperado y una función a ejecutar.
const executeTest = (input, expectedOutput, functionToExecute) => {
    // Ejecuta la función pasada como argumento con los datos de entrada y almacena el resultado en 'actualOutput'.
    const actualOutput = functionToExecute(input);

    // Comprueba si el resultado actual no coincide con el resultado esperado.
    if (actualOutput !== expectedOutput) {
        // Si no coinciden, muestra un mensaje de prueba fallida en la consola.
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`);
    } else {
        // Si coinciden, muestra un mensaje de prueba pasada en la consola.
        console.log("Test pass");
    }
}

// Define una función de prueba específica.
const testReturnsSuccessMessageWhenUserLoginWithValidEmailAndPassword = () => {
    // Crea credenciales de usuario simuladas.
    const userCredentials = { email: "myemail@mail.com", password: "securePassword" };
    
    // Define el mensaje de éxito esperado.
    const successMessage = "Bienvenido al sistema";
    
    // Ejecuta la prueba utilizando la función 'executeTest'.
    executeTest(userCredentials, successMessage, login);
}

// Llama a la función de prueba específica.
testReturnsSuccessMessageWhenUserLoginWithValidEmailAndPassword();
