import validator from 'validator';
import isEmpty from "lodash/isEmpty"

const validateInput = (data) =>{
    let errors={};

    if(validator.isEmpty(data.identifier)){
        errors.identifier="this is input is not empty"
    }
    if(validator.isEmpty(data.password)){
        errors.identifier="this is input is not empty"
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
};

export default validateInput