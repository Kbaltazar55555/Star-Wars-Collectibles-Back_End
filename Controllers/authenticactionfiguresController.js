const AuthenticActionFigure = require('../SWModel/authenticactionfiguresModel');

// CRUD-CREATE
exports.createAuthenticActionFigure = async (req, res) => {
    const authenticActionFigure = new AuthenticActionFigure({
        FigureName: req.body.FigureName,
        Manufacturer: req.body.Manufacturer,
        ReleaseYear: req.body.ReleaseYear,
        Series: req.body.Series,
        EntryDetails: req.body.EntryDetails,
        Image: req.body.Image
    });

    try {
        const newAuthenticActionFigure = await authenticActionFigure.save();
        res.status(201).json(newAuthenticActionFigure);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-READ (List All)
exports.getAllAuthenticActionFigures = async (req, res) => {
    try {
        const authenticActionFigures = await AuthenticActionFigure.find();
        res.status(200).json(authenticActionFigures);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-READ (Single Authentic Action Figure)
exports.getAuthenticActionFigureById = async (req, res) => {
    try {
        const authenticActionFigure = await AuthenticActionFigure.findById(req.params.id);
        if (!authenticActionFigure) {
            return res.status(404).json({ msg: 'Authentic Action Figure not found' });
        }
        res.status(200).json(authenticActionFigure);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-UPDATE
exports.updateAuthenticActionFigure = async (req, res) => {
    try {
        const updatedAuthenticActionFigure = await AuthenticActionFigure.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedAuthenticActionFigure) {
            return res.status(404).json({ msg: 'Authentic Action Figure not found' });
        }
        res.status(200).json(updatedAuthenticActionFigure);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-DELETE
exports.deleteAuthenticActionFigure = async (req, res) => {
    try {
        const deletedAuthenticActionFigure = await AuthenticActionFigure.findByIdAndDelete(req.params.id);
        if (!deletedAuthenticActionFigure) {
            return res.status(404).json({ msg: 'Authentic Action Figure not found' });
        }
        res.status(200).json({ msg: 'Authentic Action Figure deleted successfully' });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};
