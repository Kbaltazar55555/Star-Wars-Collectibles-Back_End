const ActionFigure = require('../SWModel/actionfigures');

// CRUD-CREATE
exports.createActionFigure = async (req, res) => {
    const actionFigure = new ActionFigure({
        characterName: req.body.characterName,
        series: req.body.series,
        releaseYear: req.body.releaseYear,
        // other fields...
    });

    try {
        const newActionFigure = await actionFigure.save();
        res.status(201).json(newActionFigure);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-READ (List All)
exports.getAllActionFigures = async (req, res) => {
    try {
        const actionFigures = await ActionFigure.find();
        res.status(200).json(actionFigures);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-READ (Single Action Figure)
exports.getActionFigureById = async (req, res) => {
    try {
        const actionFigure = await ActionFigure.findById(req.params.id);
        if (!actionFigure) {
            return res.status(404).json({ msg: 'Action Figure not found' });
        }
        res.status(200).json(actionFigure);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-UPDATE
exports.updateActionFigure = async (req, res) => {
    try {
        const updatedActionFigure = await ActionFigure.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedActionFigure) {
            return res.status(404).json({ msg: 'Action Figure not found' });
        }
        res.status(200).json(updatedActionFigure);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// CRUD-DELETE
exports.deleteActionFigure = async (req, res) => {
    try {
        const deletedActionFigure = await ActionFigure.findByIdAndDelete(req.params.id);
        if (!deletedActionFigure) {
            return res.status(404).json({ msg: 'Action Figure not found' });
        }
        res.status(200).json({ msg: 'Action Figure deleted successfully' });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};
