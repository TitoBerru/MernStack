const notesController = {};
const Note = require('../models/Note');


//Obtiene todas las notas
notesController.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json (notes)
}; 

notesController.createNotes = async(req, res) => {
    
    const newNote = new Note({
        title : req.body.title,
        content: req.body.content,
        author: req.body.author
    })
    await newNote.save();
    res.json ({newNote})
};

notesController.getNote = async(req, res) => {
   const note =  await Note.findById(req.params.id);
    // console.log(note)
    res.json(note)

};

notesController.updateNote = async (req, res) => {
    const {title, content, author} = req.body;
   await Note.findByIdAndUpdate(req.params.id,{ 
       title,
       content,
       author
    });
    res.json ({message: '1 Note por PUT'})
};

notesController.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json ({message: '1 note por DELETE'})
};

module.exports = notesController;