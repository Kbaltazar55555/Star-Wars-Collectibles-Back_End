const User = require('../SWModel/users')

exports.index = (req, res) => {
    res.send('Users INDEX');
};

exports.listAll = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(users);
    });
};
//CRUD-CREATE
exports.createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        title: req.body.title,
        bio: req.body.bio,
        Country: req.body.Country,
        Affiliations: req.body.Affiliations,
        ContactEmail: req.body.ContactEmail,
        State: req.body.State
    });
try {
    const createUser = await user.save();
    res.status(201).json(user);
}   catch(err) {
    res.status(400).json({ msg: err});
}
};

//CRUD-READ
exports.listAll = async (req, res) => {
try {
    const query = await User.find();
    res.status(200).json(query);
}   catch(err) {
    res.status(400).json({ msg: err});
}
};

exports.singleUser = async (req, res) => {
try {
    const query = await User.findById(req.params.id);
    if (!query) {
        res.status(400).json({ msg: 'Invalid User!'});
    }
    res.status(200).json(query);
}   catch(err) {
    res.status(400).json({ msg: err});
}
};

//CRUD-UPDATE
exports.updateUser = async (req, res) => {
    try {
        const query = await User.findByIdAndUpdate(
            req.params.id,
            {
            $set:req.body,
            }, {
             new: true   
            }
        );
        res.status(200).json(query);
    }   catch(err) {
        res.status(400).json({ msg: err});
    }
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // CRUD-UPDATE option 2 

/*exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,  // The ID of the user to update
            { $set: req.body },  // Update the user with the data provided in the request body
            { new: true, runValidators: true }  // Options: return the modified document rather than the original and run schema validators
        );

        if (!updatedUser) {
            // If no user was found with the given ID
            return res.status(404).json({ msg: 'User not found' });
        }

        // Send back the updated user
        res.status(200).json(updatedUser);
    } catch (err) {
        // If an error occurs (e.g., validation error, or server error)
        res.status(500).json({ msg: err.message });
    }
};*/
