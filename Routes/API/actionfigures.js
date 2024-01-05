const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/ '});
const actionFiguresController = require('../../controllers/actionfiguresController'); 


// Setting up routes for action figures
//CREATE
router.post('/', upload.single('image'), actionFiguresController.createActionFigure);

// READ
router.get('/', actionFiguresController.getAllActionFigures);
router.get('/:id', actionFiguresController.getActionFigureById);

// UPDATE (with image upload)
router.put('/:id', upload.single('image'), actionFiguresController.updateActionFigure);

// DELETE
router.delete('/:id', actionFiguresController.deleteActionFigure);

module.exports = router;

