
const {signUpUsingEmailAndPassword} = require("./SignUp");

const testReturnsPasswordTooShortMessageWhenPasswordHasMoreThanTwentyCharacters = () => {
    executeTest({
        email: "emailmaximo@mail.com",
        password: "123456789012345678901"
    }, "La contraseña debe contener maximo 20 caracteres", signUpUsingEmailAndPassword);
    
   }

const testReturnsPasswordTooShortMessageWhenPasswordHasLessThanEightCharacters = () => {
    executeTest({
        email: "validemail@mail.com",
        password: "1234567"
    }, "La contraseña debe contener al menos 8 caracteres", signUpUsingEmailAndPassword);

    executeTest({
        email: "validemail@mail.com",
        password: ""
    }, "La contraseña debe contener al menos 8 caracteres", signUpUsingEmailAndPassword);
}

const testReturnsEmailAlreadyRegisteredMessageWhenEmailIsAlreadyRegistered = () => {
    executeTest({
        email: "existingemail@mail.com",
        password: "12345678"
    }, "El correo ya se encuentra registrado", signUpUsingEmailAndPassword);
}

const testReturnsSuccessMessageWhenTheSignUpIsSuccessful = () => {
    executeTest({
        email: "validemail@mail.com",
        password: "12345678"
    }, "Registro exitoso", signUpUsingEmailAndPassword);
}

const executeTest = (input, expectedOutput, functionToExecute) => {
    const actualOutput = functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

testReturnsPasswordTooShortMessageWhenPasswordHasMoreThanTwentyCharacters();

testReturnsPasswordTooShortMessageWhenPasswordHasLessThanEightCharacters();
testReturnsEmailAlreadyRegisteredMessageWhenEmailIsAlreadyRegistered();
testReturnsSuccessMessageWhenTheSignUpIsSuccessful();


