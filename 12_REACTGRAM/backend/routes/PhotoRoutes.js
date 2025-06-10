const express = require('express');
const router = express.Router();
const imageUpload = require('../middlewares/imageUpload');

//Controllers
const {insertPhoto} = require('../controllers/PhotoController');

// Middlewares
const {photoInsertValidation} = require('../middlewares/photoValidation');
const authGuard = require('../middlewares/authGuard');
const validate = require('../middlewares/handleValidation');

//Routes
router.post("/", authGuard, imageUpload.single('image'), photoInsertValidation , validate, insertPhoto);


module.exports = router;