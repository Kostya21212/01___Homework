import React, { useEffect, useState,useMemo } from "react";
import service from "../../services/todos";

export default function TodosList({newTodo}) {
  // Збираємо дані з АРІ:
    const [todos, setTodos] = useState([]);
    const sortedTodos = useMemo(()=> todos.sort((a, b) => b.priority - a.priority),[todos]);
  const getTodos = async () => {
    // const request = await fetch(
    //   "https://6675570ea8d2b4d072efa0bb.mockapi.io/todos"
    // ),
    // response = await request.json()
      console.log('in getTodo');
    const response = await service.get();

    setTodos(response);
  };
  useEffect(() => {
    getTodos();
  }, []);
    useEffect(() => {
        console.log(`in useEffect in List component for newTodo`, newTodo);
        if (Object.keys(newTodo).length) getTodos();
     },[newTodo])
  //Сss классы которые будут задаваться нашим елемента при активности или не активности елемента:
  const getClasses = (item) => {
    const classes = ["todos__item"];
    if (item.priority) {
      classes.push(`todos__item--priority`);
    }
    if (item.active) classes.push(`todos__item_active`);
    return classes.join(` `);
  };
  //Тіло функції handleItemDelete(item.id) кнопки видалення id :
    const handleItemDelete = async (e, id) => {
        e.stopPropagation();
    await service.delete(id);
    getTodos();
  };
  //Робимо запит на API для модифікації обєкту та повернення його в response та getTodos() який перемалює массив
  const handleChangePriority = async (item) => {
    const response = await service.put(item.id, {
      ...item,
      priority: !item.priority,
    });
    getTodos();
  };
  //Робимо запит и додаэмо нашому обэкту властивість active, якщо її немає
  const handleItemActive = async (item) => {
    if (item.active) {
      delete item.active;
    } else {
      item.active = true;
    }
    await service.put(item.id, { ...item, active: true });
    getTodos();
  };

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li
          key={item.id}
          className={getClasses(item)}
          onClick={() => handleItemActive(item)}
        >
          {item.title}
          <button onClick={(e) => handleItemDelete(e,item.id)}>Delete</button>
          <input
            type="checkbox"
            defaultChecked={item.priority}
            onChange={(e) => handleChangePriority(e,item)}
          ></input>
        </li>
      ))}
    </ul>
  ) : null;
}
