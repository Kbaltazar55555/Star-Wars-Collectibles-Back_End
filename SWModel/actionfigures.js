const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const actionFigureSchema = new mongoose.Schema({
    FigureName: {
        type: String,
        required: true
    },
    CountryOfOrigin: {
        type: String, 
        required: true
    },
    SuspectedYearOfRelease: {
        type: String,
        required: true
    },
    FigureLine: {
        type: String, 
        required: true, 
    }, 
    Bio: {
        type: String, 
        required: true, 
    },
    image: {
        type: String, 
    },
});

module.exports = mongoose.model('ActionFigure', actionFigureSchema);


