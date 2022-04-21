const multer = require('multer');
//const upload = multer({dest:'../uploads/'})//Sustituir por destino final de los archivos.

const Multer = multer({
    storage: multer.memoryStorage(),
    limits:1024*1024,//limit in bytes
});

// SET STORAGE
/* const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
}) */

/* const upload = multer({ storage: storage }) */



module.exports = Multer