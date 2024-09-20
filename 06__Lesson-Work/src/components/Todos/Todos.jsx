import React, { useState } from 'react';
import '../Todos/todosStyle.sass';
import TodosForm from '../TodosForm/TodosForm';

import TodosList from '../TodosList/TodosList';

export default function Todos({ liftingNewTodoToApp }) {
  const [newTodo, setNewTodo] = useState({})
  const liftingNewTodo = (item) => {
    console.log("in todos component", item);
    liftingNewTodoToApp(item);
    setNewTodo(item)
    
  };
  //Рендеримо список:
  return (
    <>
      <TodosForm liftingNewTodo={liftingNewTodo}></TodosForm>
      <TodosList newTodo={newTodo} />
    </>
  );
}
