import React from "react";

export default function CreateUser({ person }) {
  console.log(person);
  return (
    <div className="container">
      <div className="profilePic">
        <img
          alt="img"
          src="https://s3.amazonaws.com/uifaces/faces/twitter/jonathansimmons/128.jpg"
        />
      </div>
      <div className="email">{person.email}</div>
      <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Change User
        </button>
      </div>
    </div>
  );
}
