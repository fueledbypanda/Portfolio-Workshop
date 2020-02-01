import React from "react";


export default function Notes({ notes }) {


  return (
    <div className="flex-container">
      <h1>Notes ({notes.length})</h1>
      <ul>
        {
          notes.map(note => {
            return (
              <li key={note.id}>
                {note.text}
                <hr className="line" />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
