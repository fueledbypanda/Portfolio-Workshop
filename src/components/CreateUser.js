import React from "react";

export default function CreateUser({ person, handleNewUser }) {

  const goHome=()=>{}

return (
    <div className="flex-container">
        <div className="row">
      <div>
        <img alt="img" onClick={goHome} src={person.avatar} />
      </div>
      <div>Welcome {person.email}</div>
      <div>
        <button onClick={handleNewUser} className="btn btn-info">Change User</button>
      </div>
      </div>
    </div>
  );

  }


