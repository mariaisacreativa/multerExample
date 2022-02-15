const multer = require("multer");

const diskStorage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'images');
    },
    filename: (req, file, callback)=>{
        const fileName = file.originalname;
        callback(null, fileName);
    }
});

const fileFilter = (req, file, callback) => {
    const allowTypes = ['image/jpg', 'image/png', 'image/jpeg'];
    console.log(file.mimetype)
    allowTypes.includes(file.mimetype) ? callback(null, true): callback(null, false);
}

let storage = multer({storage: diskStorage, fileFilter: fileFilter}).single('image');
let storageMultiple = multer({storage: diskStorage, fileFilter: fileFilter}).array('images')

module.exports = {storage, storageMultiple};