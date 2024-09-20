import React, { useState, useRef } from "react";
import service from "../../services/todos";

export default function TodosForm({ liftingNewTodo }) {
  const DEFAULT_NEW_TODO = {
    title: "",
    completed: false,
  };

  const [newTodo, setNewTodo] = useState(DEFAULT_NEW_TODO);
  const formRef = useRef();
  const inputTitleRef = useRef();
  const counter = useRef(10);
  const handleNewTodoTitle = (event) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const handleNewTodoCompleted = (event) => {
    setNewTodo((prevState) => ({
      ...prevState,
      completed: event.target.checked,
    }));
  };

  const handleNewTodoSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(`1.Submit form`)
      const response = await service.post(newTodo);
      console.log(`2.response`, response)
      liftingNewTodo(response); // Если вы используете axios, данные находятся в response.data
      setNewTodo(DEFAULT_NEW_TODO); // Сброс состояния на значение по умолчанию
      //reset();
      setNewTodo(DEFAULT_NEW_TODO)
      formRef.current.reset();
      inputTitleRef.current.style.borderColor = 'crimson'

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="todos__form" onSubmit={handleNewTodoSubmit}>
      <label>
        Title:
        <input
          ref={inputTitleRef}
          type="text"
          value={newTodo.title} // Используем value вместо defaultValue
          onChange={handleNewTodoTitle}
        />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={newTodo.completed} // Используем checked вместо defaultChecked
          onChange={handleNewTodoCompleted}
        />
      </label>
      <button type="submit">Add new Todo</button>
    </form>
  );
}
