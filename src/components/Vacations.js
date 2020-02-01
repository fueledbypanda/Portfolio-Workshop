import React, { useState } from "react";

// export default function Vacations({ vacations }) {
//   // curl -X POST https://acme-users-api-rev.herokuapp.com/api/users/:userIdGoesHere/vacations -d '{"startDate": "07/15/2020", "endDate": "07/30/2020"}' -H "Content-Type:application/json"

//   return (
//     <div className="flex-container">
{
  /* <h1>Vacations</h1>
      <ul>
        {
          vacations.map(vacay => {
            console.log(vacay)
            return (
              <li key={vacay.id}>

                Start Date: {vacay.startDate}
                End Date: {vacay.endDate}
                {} Days
                <hr class="line" />
              </li>
            )
          })
        }
      </ul>

    // </div> */
}

export default function CreateVacation({ users, onVacationCreated }) {
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
    <div>
      <div>
        <h1 className="title">ACME Planner for {users.fullName}</h1>
      </div>
      <div>
        Start Date:
        <input
          type="date"
          className="col input"
          placeholder="Start Date"
          onChange={handleDateChange("startDate")}
        />
      </div>
      <div>
        End Date:
        <input
          type="date"
          className="col input"
          placeholder="End Date"
          onChange={handleDateChange("endDate")}
        />
      </div>
      <div>
        <button className="btn btn-secondary" onClick={handleVacationCreated}>
          Create Vacation Button
        </button>
      </div>
      <div></div>
    </div>
  );
}
