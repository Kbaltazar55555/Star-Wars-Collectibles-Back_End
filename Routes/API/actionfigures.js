const express = require('express');
const router = express.Router();
const actionFiguresController = require('../../controllers/actionfiguresController'); 

// Setting up routes for action figures
//CREATE
router.post('/', actionFiguresController.createActionFigure);

//READ
router.get('/', actionFiguresController.getAllActionFigures);
router.get('/:id', actionFiguresController.getActionFigureById);

//UPDATE
router.put('/:id', actionFiguresController.updateActionFigure);

//DELETE
router.delete('/:id', actionFiguresController.deleteActionFigure);

module.exports = router;

