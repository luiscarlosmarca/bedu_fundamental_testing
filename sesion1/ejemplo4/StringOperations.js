const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
    //return pascalCaseString.split(/(?=[A-Z])/).join('-').toLowerCase();
}
module.exports = {castPascalCaseToSnakeCase};