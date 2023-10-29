// Importa la función 'login' desde un módulo llamado "Login"
const { login } = require("./Login");

// Define una función llamada 'executeTest' que toma datos de entrada, resultado esperado y una función a ejecutar.
const executeTest = (input, expectedOutput, functionToExecute) => {
    // Ejecuta la función pasada como argumento con los datos de entrada y almacena el resultado en 'actualOutput'.
    const actualOutput = functionToExecute(input);

    // Compara el resultado real con el resultado esperado.
    if (actualOutput !== expectedOutput) {
        // Si no coinciden, muestra un mensaje de prueba fallida en la consola con los resultados esperados y reales.
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`);
    } else {
        // Si coinciden, muestra un mensaje de prueba exitosa en la consola.
        console.log("Test pass");
    }
}

// Define varias funciones de prueba para verificar diferentes escenarios.

// Prueba 1: Verifica si se recibe un mensaje de bienvenida cuando un usuario inicia sesión con un correo electrónico y una contraseña válidos.
const testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = { email: "myemail@mail.com", password: "securePassword" };
    const successMessage = "Bienvenido al sistema";
    // Ejecuta la prueba utilizando la función 'executeTest'.
    executeTest(userCredentials, successMessage, login);
}

// Prueba 2: Verifica si se recibe un mensaje de "Contraseña incorrecta" cuando un usuario inicia sesión con un correo electrónico válido pero una contraseña incorrecta.
const testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = { email: "myemail@mail.com", password: "invalidPassword" };
    const successMessage = "Contraseña incorrecta";
    // Ejecuta la prueba utilizando la función 'executeTest'.
    executeTest(userCredentials, successMessage, login);
}

// Prueba 3: Verifica si se recibe un mensaje de "Usuario no registrado" cuando un usuario inicia sesión con un correo electrónico no registrado.
const testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = { email: "unregistered_user@mail.com", password: "securePassword" };
    const successMessage = "Usuario no registrado";
    // Ejecuta la prueba utilizando la función 'executeTest'.
    executeTest(userCredentials, successMessage, login);
}

// Ejecuta las pruebas definidas anteriormente.
testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword();
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword();
testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword();
