import React from "react";


export default function Companies({ companies }) {

  return (
    <div className="flex-container">
      <h1>Companies</h1>
      <ul>
        {
          companies.map(company => {
            return (
              <li key={company.id}>
                {company.text}
                <hr class="line" />
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}