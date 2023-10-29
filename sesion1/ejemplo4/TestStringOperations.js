const {castPascalCaseToSnakeCase} = require("./StringOperations");


const testCastPascalCaseToSnakeCase = () => {
    const pascalCaseString = "EstoEsUnEjemplo";
    const expectedSnakeCaseString = "esto_es_un_ejemplo";
    const actualSnakeCaseString = castPascalCaseToSnakeCase(pascalCaseString);
    if (actualSnakeCaseString !== expectedSnakeCaseString) {
        console.log(`Test fail expected output: ${expectedSnakeCaseString}  actual output: ${actualSnakeCaseString}`)
    } else {
        console.log("Test pass")
    }
}


testCastPascalCaseToSnakeCase()

