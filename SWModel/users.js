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
    }
    // Add any additional fields here
});

// If you need to create a model from the schema:
// const User = mongoose.model('User', UserSchema);

// Export the model if you're using it in other files:
// module.exports = User;
