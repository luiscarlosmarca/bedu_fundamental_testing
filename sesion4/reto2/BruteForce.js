// Importa la función 'login' desde un módulo llamado "Login".
const { login } = require("./Login");

// Define un array llamado 'alphabet' que contiene todas las letras del alfabeto en minúsculas.
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Define un correo electrónico válido.
const validEmail = "myemail@mail.com";

// Define la parte final de una contraseña válida.
const validPasswordEnding = "Password";

// Define el mensaje de éxito que se espera recibir al iniciar sesión.
const successMessage = "Bienvenido al sistema";

// Define la función 'findValidPassword' que intentará encontrar la contraseña correcta.
const findValidPassword = () => {
    for (let i1 = 0; i1 < alphabet.length; i1++) {
        for (let i2 = 0; i2 < alphabet.length; i2++) {
            for (let i3 = 0; i3 < alphabet.length; i3++) {
                for (let i4 = 0; i4 < alphabet.length; i4++) {
                    for (let i5 = 0; i5 < alphabet.length; i5++) {
                        for (let i6 = 0; i6 < alphabet.length; i6++) {
                            // Genera una contraseña combinando las letras del alfabeto con la parte final conocida.
                            const password = alphabet[i1] + alphabet[i2] + alphabet[i3] + alphabet[i4] + alphabet[i5] + alphabet[i6] + validPasswordEnding;

                            // Intenta iniciar sesión con el correo electrónico válido y la contraseña generada.
                            if (login({ email: validEmail, password }) === successMessage) {
                                // Si el inicio de sesión tiene éxito, muestra un mensaje y detiene la ejecución.
                                console.log("Contraseña encontrada: " + password);
                                return 0;
                            }
                        }
                    }
                }
            }
        }
    }
}

// Llama a la función 'findValidPassword' para iniciar el proceso de fuerza bruta.
findValidPassword();

