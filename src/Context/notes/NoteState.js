import React from "react";               
import NoteContext from "./NoteContext";              //NoteState can also be used as NoteProvider 
import { useState } from "react";

const NoteState = (props) => {
  const host ="http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjIzYWYwNzEzY2YwMjc1OWRlOTMzIn0sImlhdCI6MTY0OTY1NTIxMH0.IjM1R6W_jwAIfh2RmeAo7F1v1x72mWCkXs2jQQRUqFU"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }


// Add Note
const addNote = async (title,description,tag)=> {

  // API Call 
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjIzYWYwNzEzY2YwMjc1OWRlOTMzIn0sImlhdCI6MTY0OTY1NTIxMH0.IjM1R6W_jwAIfh2RmeAo7F1v1x72mWCkXs2jQQRUqFU"
    },
    body: JSON.stringify({title, description, tag})
  });


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

const deleteNote = async (id)=> {
  //API Call
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjIzYWYwNzEzY2YwMjc1OWRlOTMzIn0sImlhdCI6MTY0OTY1NTIxMH0.IjM1R6W_jwAIfh2RmeAo7F1v1x72mWCkXs2jQQRUqFU"
  }
});

const json = response.json();
console.log(json)

  console.log("Deleting the note with id" + id);
  const newNotes = notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes)
}

// EDIT NOTE 

  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjIzYWYwNzEzY2YwMjc1OWRlOTMzIn0sImlhdCI6MTY0OTY1NTIxMH0.IjM1R6W_jwAIfh2RmeAo7F1v1x72mWCkXs2jQQRUqFU"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;
