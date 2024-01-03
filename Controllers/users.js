/*const User = require('../SWModel/users')

exports.index = (req, res) => {
    res.send('Users INDEX');
};
exports.listAll = (req, res) => {
    res.send('List All Users');
};

exports.createUser = (req, res) => {
    const user = new User ({
        name: req.body.name,
        title: req.body.title,
        bio: req.body.bio,
    });

    user.save().then((data) => {
        res.status(200).json(data);
    });
}*/

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

exports.createUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        title: req.body.title,
        bio: req.body.bio,
        Country: req.body.Country,
        Affiliations: req.body.Affiliations,
        ContactEmail: req.body.ContactEmail,
        State: req.body.State
    });

    user.save()
        .then((data) => {
            res.status(201).json(data);  // 201 status code for created resource
        })
        .catch((error) => {
            // Handle any errors, including validation errors
            if (error.name === 'ValidationError') {
                return res.status(400).json(error); // 400 for bad request
            }
            res.status(500).send(error); // 500 for internal server error
        });
};
