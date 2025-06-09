 
const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const conn = async () => {
    try {
        // A string de conexão muda para apontar ao contêiner local
        const dbConn = await mongoose.connect(
            `mongodb://${dbUser}:${dbPassword}@${dbHost}:27017/reactgram?authSource=admin`
        );
        console.log('MongoDB local conectado com sucesso!');
        return dbConn;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados local:', error);
        process.exit(1);
    }
};

conn();

module.exports = conn;

