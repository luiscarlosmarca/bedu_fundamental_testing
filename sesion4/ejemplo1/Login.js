// Define un array de usuarios con una sola entrada.
const users = [{ email: "myemail@mail.com", password: "securePassword" }];

// Define la función 'login' que verifica las credenciales de usuario.
const login = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        // Compara las credenciales proporcionadas con las credenciales en el array de usuarios.
        if (userCredentials.email === users[i].email && userCredentials.password === users[i].password) {
            // Si las credenciales coinciden con las del usuario en el array, devuelve un mensaje de éxito.
            return "Bienvenido al sistema";
        } else {
            // Si no hay coincidencia, devuelve un mensaje de fallo de credenciales.
            return "Falla de credenciales";
        }
    }
}

// Exporta la función 'login' para que pueda ser utilizada en otros módulos.
module.exports = { login };
