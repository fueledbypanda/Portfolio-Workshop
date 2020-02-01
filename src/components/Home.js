import React from 'react';

export default function Home({ notes, vacations, companies }) {

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="circle-container">

        <div className="circle">
          <p><strong><a href="#view=notes">Notes</a></strong><br />
            You have {notes.length} notes.</p>
        </div>
        <div className="circle">
          <p><strong><a href="#view=vacations">Vacations</a></strong><br />
            You have {vacations.length} vacations.</p>
        </div>

        <div className="circle">
          <p><strong><a href="#view=companies">Following Companies</a></strong><br />
            You are following {companies.length} companies</p>
        </div>


      </div>
    </div>
  )
}
