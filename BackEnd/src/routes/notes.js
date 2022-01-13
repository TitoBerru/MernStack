const { Router } = require('express')
const router = Router();
const notesController = require('../controllers/notesController')

router.route('/')
    .get (notesController.getNotes)
    .post (notesController.createNotes);

router.route('/:id')
    .get (notesController.getNote)
    .delete (notesController.deleteNote)
    .put (notesController.updateNote);  

      

module.exports = router;
