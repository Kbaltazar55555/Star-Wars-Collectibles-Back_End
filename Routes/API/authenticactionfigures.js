const express = require('express');
const router = express.Router();
const authenticActionFiguresController = require('../../controllers/authenticactionfigures'); 

// Setting up routes for Authentic Action Figures
//CREATE
router.post('/authentic', authenticActionFiguresController.createAuthenticActionFigure);

//READ
router.get('/authentic', authenticActionFiguresController.getAllAuthenticActionFigures);
router.get('/authentic/:id', authenticActionFiguresController.getAuthenticActionFigureById);

//UPDATE
router.put('/authentic/:id', authenticActionFiguresController.updateAuthenticActionFigure);

//DELETE
router.delete('/authentic/:id', authenticActionFiguresController.deleteAuthenticActionFigure);

module.exports = router;
