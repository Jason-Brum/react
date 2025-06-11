const {validationResult} = require('express-validator');

const validate = (req, res, next) => { 
    console.log('Validando os dados recebidos...');
    const errors = validationResult(req);

    // Se NÃO houver erros, continue para o controller
    if (errors.isEmpty()) {
        return next();
    } 

    // Se HOUVER erros, extraia e retorne a resposta de erro 422
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push(err.msg));

    return res.status(422).json({
        errors: extractedErrors,
    });
};

module.exports = validate;