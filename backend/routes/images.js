const express = require("express");
const imageController = require("../controllers/images");
const {storage, storageMultiple} = require("../midleware/storage");

const router = express.Router();

router.get('/', imageController.getImages);
router.post('/', storage, imageController.postImage)
router.post('/multiple', storageMultiple, imageController.postMultipleImage )

module.exports = router