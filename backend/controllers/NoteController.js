import Note from "../models/NoteModel.js";

export const getNote = async(req, res) => {
  try {
    const response = await Note.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getNoteById = async(req, res) => {
  try {
    const response = await Note.findOne({
      where:{
        id:req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createNote = async(req, res) => {
  try {
    const inputResult = req.body;
    await Note.create(inputResult);
    res.status(201).json({ msg: "Note Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export const updateNote = async(req, res) => {
  try {
    await Note.update(req.body, {
      where:{
        id: req.params.id
      }
    });
    res.status(200).json({msg: "Note updated"});
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteNote = async(req, res) => {
  try {
    await Note.destroy({
      where:{
        id: req.params.id
      }
    });
    res.status(200).json({msg: "Note deleted"});
  } catch (error) {
    console.log(error.message);
  }
}