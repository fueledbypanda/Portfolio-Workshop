import React from "react";


export default function Vacations({ vacations }) {

  // curl -X POST https://acme-users-api-rev.herokuapp.com/api/users/:userIdGoesHere/vacations -d '{"startDate": "07/15/2020", "endDate": "07/30/2020"}' -H "Content-Type:application/json"


  return (
    <div className="flex-container">
      <h1>Vacations</h1>
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

    </div>
  )
}
