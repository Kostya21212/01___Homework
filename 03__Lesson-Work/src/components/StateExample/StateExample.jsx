import React from "react";
import { useState } from "react";
import '../css/style.min.css';
export default function List() {
   
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter+1)
    }
    const handleRemoveLastItem = () => {
        setList(list.slice(0, -1))
    }
    const handleAgeIncrement = () => {
        setUser(user.map(user => {
            user.age += 1
            return user
        }))
    }
    const handleAddItem = () => {
        const animal = prompt('Enter animal');
        setList(list.push(animal))
    }
    const [list, setList] = useState(['dog', 'cat', 'pig'])
    const [user, setUser] = useState([
      {
        name: "user 1",
        age: 10,
      },
      {
        name: "user 1",
        age: 20,
      },
      {
        name: "user 1",
        age: 30,
        }
      
    ]);
    return (
      <>
        <div>
          <p>Counter: {counter}</p>
          <button onClick={handleIncrement}>+</button>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={handleRemoveLastItem}>Remove Item</button>
            <button onClick={handleAddItem}>Add item</button>
          <table>
            <tbody>{user.map((user, index) =>
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>)}
            </tbody>
                </table>
                <button onClick={handleAgeIncrement}>increment age</button>
        </div>
      </>
    );
}