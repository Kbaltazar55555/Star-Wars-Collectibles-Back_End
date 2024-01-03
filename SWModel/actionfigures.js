const mongoose = require('mongoose');

const actionFigureSchema = new mongoose.Schema({
    FigureName: {
        type: String,
        required: true
    },
    CountryOfOrigin: {
        type: String, 
        unique: true,
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
});

module.exports = mongoose.model('ActionFigure', actionFigureSchema);