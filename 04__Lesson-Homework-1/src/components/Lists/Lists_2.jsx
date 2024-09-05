import React from 'react'

export default function Lists_2({ task }) {
  console.log(task);
  return (
    <div className="InProgressListComponent">
      <h2>In progress:</h2>
      {Object.keys(task).map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </div>
  );
}
