const {body} = require('express-validator');
const photoInsertValidation = () => {
    console.log('Validando inserção de foto...');
    
    return [
        body('title')
            .not()
            .equals("undefined")
            .withMessage('O título é obrigatório.')
            .isString()
            .withMessage('O título é obrigatório.')
            .isLength({min: 3})
            .withMessage('O título deve ter pelo menos 3 caracteres.'),
        body('image').custom((value, {req}) => {
            if (!req.file) {
                throw new Error('A imagem é obrigatória.');
            }
            return true;
        }),
    ];
};

const photoUpdateValidation = () => {
    return [
        body('title')
            .optional()
            .isString()
            .withMessage('O título precisa ser um texto.')
            .isLength({min: 3})
            .withMessage('O título deve ter pelo menos 3 caracteres.'),
    ];
}

const commentValidation = () => {
    return [
        body('comment')
            .not()
            .isEmpty()
            .withMessage('Seu comentário está vazio.')
            .isString()
            .withMessage('O comentário precisa ser um texto.')
            .isLength({min: 3})
            .withMessage('O comentário deve ter pelo menos 3 caracteres.'),
    ];
};


module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,
};