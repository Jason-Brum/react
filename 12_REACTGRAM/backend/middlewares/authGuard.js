const User = require('../models/User');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
    console.log('Autenticando usuário...');
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ errors: ['Acesso negado, token não fornecido.'] })
    }

    try { 
        const verified = jwt.verify(token, jwtSecret);
        req.user = await User.findById(verified.id).select('-password');

        next();

     } catch (error) {
            return res.status(400).json({ errors: ['Token inválido.'] });
        }
    };

module.exports = authGuard;
