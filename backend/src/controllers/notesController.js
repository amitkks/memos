import Note from "../models/noteModel.js"

export const getAllNotes = async (req, res) => {
    try{
        const notes = await Note.find({}).sort({createdAt: -1})
        res.status(200).json(notes)
    }
    catch(err){
        console.log("Error in getAllNotes controller", err)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getNote = async (req, res) => {
    try{
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({messge: "Note not found"});
        res.status(200).json(note)
    }
    catch(err){
        console.log("Error in getNote controller", err)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const createNote = async (req, res) => {
    try{
        const {title, content} = req.body
        const newNote = new Note({title, content})

        const savedNote = await newNote.save()
        res.status(201).json(savedNote)
    }catch(err){
        console.log("Error in createNote controller", err)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const updateNote = async (req, res) => {
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
        if(!updateNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json(updateNote)
    } catch (error) {
        console.log("Error in updateNote controller", err)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const deleteNote = async (req, res) => {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json({message: "Note deleted successfully"})
    }catch(err){
        console.log("Error in deleteNote controller", err)
        res.status(500).json({message: "Internal Server Error"})
    }
}