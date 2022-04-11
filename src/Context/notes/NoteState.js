import React from "react";               
import NoteContext from "./NoteContext";              //NoteState can also be used as NoteProvider 
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "624c7088fbc288e143f6dfa5",
      "user": "624b23af0713cf02759de933",
      "title": "My Title",
      "description": " Please wake up early",
      "tag": "personal",
      "date": "2022-04-05T16:38:32.437Z",
      "__v": "0"
    },
    {
      "_id": "624c7088fbc288e143f6dfa6",
      "user": "624b23af0713cf02759de933",
      "title": "My Title",
      "description": " Please wake up early",
      "tag": "personal",
      "date": "2022-04-05T16:38:32.437Z",
      "__v": "0"
    },
    {
      "_id": "624c7088fbc288e143f6dfa7",
      "user": "624b23af0713cf02759de933",
      "title": "My Title",
      "description": " Please wake up early",
      "tag": "personal",
      "date": "2022-04-05T16:38:32.437Z",
      "__v": "0"
    },
    {
      "_id": "624c7088fbc288e143f6dfa8",
      "user": "624b23af0713cf02759de933",
      "title": "My Title",
      "description": " Please wake up early",
      "tag": "personal",
      "date": "2022-04-05T16:38:32.437Z",
      "__v": "0"
    },
    {
      "_id": "624c7088fbc288e143f6dfa9",
      "user": "624b23af0713cf02759de933",
      "title": "My Title",
      "description": " Please wake up early",
      "tag": "personal",
      "date": "2022-04-05T16:38:32.437Z",
      "__v": "0"
    }
  ]
  const [notes, setNotes] = useState(notesInitial);

// Add Note
const addNote = (title,description,tag)=> {
  //TODO : API CALL
  console.log("Adding a new Note ")
  const note = {
    "_id": "624c7088fbc288e143f6dfa0",
   "user": "624b23af0713cf02759de933",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2022-04-05T16:38:32.437Z",
    "__v": "0"
  };
  setNotes(notes.concat(note))

}
// Delete Note
const deleteNote = ()=> {

}
// Edit Note
const editNote = ()=> {

}

  return (
    <NoteContext.Provider value={{notes,addNote ,deleteNote ,editNote}}>
      {props.children}
    </NoteContext.Provider>
    
  );
};
export default NoteState;
