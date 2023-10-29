const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

console.log(castPascalCaseToSnakeCase("EstoEsUnEjemplo"))



