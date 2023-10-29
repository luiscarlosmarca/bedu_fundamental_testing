
const users = [{email: "existingemail@mail.com", password: "12345678"}];

const signUpUsingEmailAndPassword = ({email, password}) => {
    if (password.length < 8) {
        return "La contraseña debe contener al menos 8 caracteres";
    }

    if (password.length > 20) {
        return "La contraseña debe contener maximo 20 caracteres";
    }

    for (let index = 0; index < users.length; index++){
        if(email === users[index].email){
            return "El correo ya se encuentra registrado";
        }
    }

    users.push({email, password});
    return "Registro exitoso";
}





module.exports = {signUpUsingEmailAndPassword};

