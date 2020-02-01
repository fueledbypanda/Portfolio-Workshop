import React from "react";

export default function CreateUser({ person, handleNewUser }) {


  return (
    <div className="flex-container">
      <div className="row">
        <div>
          <a href="#"><img alt={person.fullName} src={person.avatar} /></a>
        </div>
        <div>Welcome {person.email}</div>
        <div>
          <button onClick={handleNewUser} className="btn btn-info">Change User</button>
        </div>
      </div>
    </div>
  );

}


