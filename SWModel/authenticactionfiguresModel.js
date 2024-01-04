const mongoose = require('mongoose');

const authenticActionFigureSchema = new mongoose.Schema({
    FigureName: {
        type: String,
        required: true
    },
    Manufacturer: {
        type: String, 
        required: true
    },
    ReleaseYear: {
        type: Number, 
        required: true
    },
    Series: {
        type: String, 
        required: true
    },
    EntryDetails: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('AuthenticActionFigure', authenticActionFigureSchema);
