const multer = require('multer');
const path = require('path');

//Destination folder for uploaded images
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = '';

        if (req.baseUrl.includes('users')) {
            folder = 'users';
        } else if (req.baseUrl.includes('products')) {
            folder = 'photos';
        } 

        cb(null, `uploads/${folder}`);
    },

    filename: function (req, file, cb) {

        cb(null, Date.now() + path.extname(file.originalname));
        
    }
})

const imageUpload = multer({
    storage: imageStorage,
    limits: { fileSize: 1000000 }, // Limit file size to 1MB
    fileFilter: (req, file, cb) => {
        console.log('Validando arquivo de imagem...');
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Arquivo deve ser uma imagem válida (jpeg, jpg, png, gif)');
        }
    }
});

module.exports = imageUpload;