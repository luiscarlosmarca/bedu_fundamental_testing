
const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const castSnakeCaseToPascalCase = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

console.log("De pascal (GetItem) a snake :"+castPascalCaseToSnakeCase("GetItem"))
console.log("De snake (get_item) a pascal:"+castSnakeCaseToPascalCase("get_item"))
module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase};
