// Define un array de usuarios con una sola entrada.
const users = [{ email: "myemail@mail.com", password: "securePassword" }];

// Define la función 'login' que verifica las credenciales de usuario.
const login = (userCredentials) => {
    // Inicializa una variable para rastrear si el usuario está registrado.
    let isUserRegistered = false;

    // Itera a través de los usuarios en el array.
    for (let i = 0; i < users.length; i++) {
        // Compara el correo electrónico proporcionado con el correo electrónico del usuario en el array.
        if (userCredentials.email === users[0].email) {
            // Si el correo electrónico coincide, marca al usuario como registrado.
            isUserRegistered = true;

            // Luego, compara la contraseña proporcionada con la contraseña del usuario en el array.
            if (userCredentials.password === users[0].password) {
                // Si la contraseña coincide, devuelve un mensaje de bienvenida.
                return "Bienvenido al sistema";
            }
        }
    }

    // Si el usuario está registrado pero la contraseña no coincide, devuelve un mensaje de "Contraseña incorrecta".
    // Si el usuario no está registrado, devuelve un mensaje de "Usuario no registrado".
    return isUserRegistered ? "Contraseña incorrecta" : "Usuario no registrado";
}

// Exporta la función 'login' para que pueda ser utilizada en otros módulos.
module.exports = { login };
