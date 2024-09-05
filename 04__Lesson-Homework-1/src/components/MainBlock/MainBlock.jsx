import React, { useState } from "react";
import Lists_1 from "../Lists/Lists_1";
import Lists_2 from "../Lists/Lists_2";
import Lists_3 from "../Lists/Lists_3";
import {objectList} from "../ObjectList/objectList";

export default function MainBlock() {
  const initialTasks = [
    { id: 1, title: "Task 1", status: 0 },
    { id: 2, title: "Task 2", status: 0 },
    { id: 3, title: "Task 3", status: 0 },
    { id: 4, title: "Task 4", status: 0 },
    { id: 5, title: "Task 5", status: 0 },
    { id: 6, title: "Task 6", status: 2 },
    { id: 7, title: "Task 7", status: 2 },
  ];
  const [objectArr, setObjectArr] = useState(initialTasks)
  return (
    <div className="main__block">
      <Lists_1 task={objectArr}></Lists_1>
      <Lists_2 task={objectArr}></Lists_2>
      <Lists_3 task={objectArr}></Lists_3>
    </div>
  );
}
