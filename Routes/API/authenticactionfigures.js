const express = require('express');
const router = express.Router();
const authenticActionFiguresController = require('../../controllers/authenticactionfiguresController'); 

// Setting up routes for Authentic Action Figures
//CREATE
router.post('/', authenticActionFiguresController.createAuthenticActionFigure);

//READ
router.get('/', authenticActionFiguresController.getAllAuthenticActionFigures);
router.get('/:id', authenticActionFiguresController.getAuthenticActionFigureById);

//UPDATE
router.put('/:id', authenticActionFiguresController.updateAuthenticActionFigure);

//DELETE
router.delete('/:id', authenticActionFiguresController.deleteAuthenticActionFigure);

module.exports = router;
