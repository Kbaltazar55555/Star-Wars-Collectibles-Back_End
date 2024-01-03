const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    bio: {
        type: String, 
        required: true, 
    }, 
    Date: {
        type: Date, 
        default: Date.now, 
    },
    Country: {
        type: String, 
        required: true, 
    }, 
    State: {
        type: String, 
        required: false, 
    }, 
    Affiliations: {
        type: String, 
        required: true, 
    }, 
    ContactEmail: {
        type: String, 
        required: true, 
    }, 
});

module.exports = mongoose.model('User', UserSchema);
//Collection within the DB

// If you need to create a model from the schema:
// const User = mongoose.model('User', UserSchema);

// Export the model if you're using it in other files:
// module.exports = User;
