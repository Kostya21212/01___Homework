import React from 'react'
import '../Lists/ListStyle.css/List.css'
export default function Lists_1({ task }) {
  console.log(task.title)
  return (
    <div className="toDoListComponent">
      <h2>To Do</h2>
      {Object.keys(task).map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </div>
  );
}
