export const updateField = (field, fields) => {
    fields[field.name] = field.value
    return fields
}
/* export const requiredFields = (fields) => {
    let valid = 0
    Object.keys(fields).map(function (key) {
        valid += fields[key].require && fields[key].value === "" ? 1 : 0
    })
    return valid > 0 ? false : true;
}
 */
/* export const testValidators = (validator) => {
    let valid = 0
    Object.keys(validator).map(function (key) {
        valid += validator[key].error ? 1 : 0
    })
    return valid > 0 ? false : true;
} */
/* export const cleanDatas = (fields, datas) => {
    Object.keys(fields).map(function (key) {
        datas[key] = fields[key].value
    })
    return datas
} */
/* export const cleanDatas = (fields) => {
    let datas = []
    Object.keys(fields).map(function (key) {
        datas.push(fields[key].value)
    })
    return datas
} */