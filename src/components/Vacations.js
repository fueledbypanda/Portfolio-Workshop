import React, { useState } from "react";
import moment from 'moment';
import axios from 'axios'

export default function CreateVacation({ users, onVacationCreated, vacations, deleteVacay }) {
  const [dates, setDates] = useState({ startDate: "", endDate: "" });


  const handleDateChange = key => ev => {
    const updatedDates = {
      ...dates,
      [key]: ev.target.value
    };
    setDates(updatedDates);
  };
  const handleVacationCreated = () => {
    onVacationCreated(dates);
  };



  return (
    <div className="container">
      <div className="form-fill">
        <h1 className="title">Vacations for {users.fullName}</h1>
      </div>

      <div className="form">
        <div className="form-fill">
          Start Date:
        <input
            type="date"
            className="col input"
            placeholder="Start Date"
            onChange={handleDateChange("startDate")}
          />
        </div>
        <div className="form-fill">
          End Date:
        <input
            type="date"
            className="col input"
            placeholder="End Date"
            onChange={handleDateChange("endDate")}
          />
        </div>
        <div className="form-fill">
          <button className="btn btn-secondary vacay-btn" onClick={handleVacationCreated}>
            Create Vacation Button
        </button>
        </div>
      </div>
      <div>
        <ul>
          {
            vacations.map(vacay => {
              // const startDate = ([vacay.startDate])
              // const endDate = ([vacay.endDate])
              // console.log(startDate)

              function onDeleteVacation() {
                deleteVacay(vacay.id)
              }

              return (
                <li key={vacay.id}>
                  Start Date: {moment(vacay.startDate).format('MMMM Do YYYY')} <br />
                  End Date: {moment(vacay.endDate).format('MMMM Do YYYY')}<br />

                  After vacation starts, it will end {moment(vacay.endDate).endOf('day').from(vacay.startDate)}
                  <button onClick={onDeleteVacation} className="btn btn-danger" >Delete</button>

                  <hr className="line" />
                </li>
              )
            })
          }
        </ul>

      </div>

    </div >

  );
}
