const Image = require("../models/image");
const imageMultiple = require("../models/imageMultiple");

getImages = async (req, res)=>{
    const images = await imageMultiple.find();
    res.status(200).json(images);
}

postImage = async (req, res)=>{
    console.log("req.file: " +req.file)
    const {nombre} = req.body;
    const imageRuta = `http://localhost:${process.env.PORT}/images/${req.file.filename}`;
    const image = new Image({
        nombre,
        imageRuta
    });
    const imagenCreada = await image.save();
    res.status(200).json({
        image: {
            ...imagenCreada._doc  //spread operator
        }
    })
}

postMultipleImage = async (req, res)=>{
    console.log("req.file: " +req.files)
    const {idApartment} = req.body;
    const imageRutas = []; //`http://localhost:${process.env.PORT}/images/${req.file.filename}`;
    req.files.forEach(element => {
        console.log(element.filename)
        imageRutas.push(`http://localhost:${process.env.PORT}/images/${element.filename}`);
    });
    console.log(imageRutas)
    const image = new imageMultiple({
        idApartment,
        imageRutas
    });

    const imagenesCreada = await image.save();
    res.status(200).json({
        ...imagenesCreada._doc  //spread operator
    })
}

module.exports = {
    getImages,
    postImage,
    postMultipleImage
}