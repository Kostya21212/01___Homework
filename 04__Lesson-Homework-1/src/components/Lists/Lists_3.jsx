import React from 'react'

export default function Lists_3({task}) {
  console.log(task);
  return (
    <div className="DoneListComponent">
      <h2>Done:</h2>
      {Object.keys(task).map((item, i) => (
        <li key={i}>{item.status}</li>
      ))}
    </div>
  );
}
