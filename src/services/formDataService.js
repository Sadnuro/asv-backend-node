const stratumDao = require('../dao/stratumDao');
const departmentDao = require('../dao/departmentDao');
const documentTypeDao = require('../dao/documentTypeDao');

const getFormData = async () => {
    try {
        // Get data
        const strataResult = await stratumDao.getAll();
        const documentTypesResult = await documentTypeDao.getAll();
        const deparmentsResult = await departmentDao.getAll();

        // DTO mapping data


        // Must use DTO mapped data
        const formData = {
            // housingTypes: ,
            // maritalUnionTypes: ,
            documentTypes: documentTypesResult.rows,
            departments: deparmentsResult.rows,
            strata: strataResult.rows
        };
        return formData
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getFormData
};