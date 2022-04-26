import React, { useContext, useEffect, useRef ,useState } from "react";
import NoteContext from "../Context/notes/NoteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context; //Destructuring
  useEffect(() => {
    getNotes();
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle: currentNote.title , edescription: currentNote.description  , etag: currentNote.tag})
  };
  const ref = useRef(null);
  const [note, setNote] = useState({etitle: "", edescription: "", etag: ""})
  const handleClick = (e)=>{
    console.log("Updating the note ... " , note);
    e.preventDefault();
  }
  
  const onChange = (e)=>{
    setNote({...note, [e.target.name] : e.target.value})           // Spread Operator
    }
    

  return (
    <>
      <div className="container">
        <AddNote />

        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      onChange={onChange}
                      type="text"
                      value = {note.etitle}
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      onChange={onChange}
                      type="text"
                      value = {note.edescription}
                      className="form-control"
                      id="edescription"
                      name="edescription"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      value = {note.etag}
                      className="form-control"
                      id="etag"
                      name="etag"
                      onChange={onChange}
                    />
                  </div>

                
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={handleClick} type="button" className="btn btn-primary">
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return (
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
