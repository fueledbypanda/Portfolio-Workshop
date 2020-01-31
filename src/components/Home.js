import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="circle-container">

      <div className="circle">
        <p><strong>Notes</strong><br />
          You have {} notes.</p>
        </div>
      <div className="circle">
        <p><strong>Vacations</strong><br />
          You have {} vacations.</p>
        </div>

        <div className="circle">
        <p><strong>Following Companies</strong><br />
          You are following {} companies</p>
        </div>


      </div>
</div>
  )
}
