import React from "react";

export default function Notes({ notes }) {
  return (
    <div className="flex-container">
      <h1>Notes</h1>
      <ul>
        {notes.map(note => {
          return <li></li>;
        })}
      </ul>
    </div>
  );
}
