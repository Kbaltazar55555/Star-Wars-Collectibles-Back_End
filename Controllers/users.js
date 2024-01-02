const User = require('../SWModel/users')

exports.index = (req, res) => {
    res.send('Users INDEX');
};
exports.listAll = (req, res) => {
    res.send('List All Users');
};