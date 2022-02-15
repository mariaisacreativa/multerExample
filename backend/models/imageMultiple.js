const mongoose = require("mongoose");

const imageMultipleSchema = mongoose.Schema({
    idApartment: {
        type: String, 
        require: true
    },
    imageRutas: {
        type: [String],
        require: true
    }
});

module.exports = mongoose.model('ImageMultiple', imageMultipleSchema);