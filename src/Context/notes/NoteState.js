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

  const note = await response.json();
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

  const newNotes = notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes)
}

// EDIT NOTE 

  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjIzYWYwNzEzY2YwMjc1OWRlOTMzIn0sImlhdCI6MTY0OTY1NTIxMH0.IjM1R6W_jwAIfh2RmeAo7F1v1x72mWCkXs2jQQRUqFU"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;
