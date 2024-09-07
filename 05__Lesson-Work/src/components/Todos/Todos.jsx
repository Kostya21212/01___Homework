import React from 'react'
import { useState,useEffect } from 'react'
export default function Todos() {
    const API = 'https://jsonplaceholder.typicode.com/todos';
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
    try {
        const request = await fetch(API),
            response = await request.json()
            setTodos(response.slice(0,10))
    } catch (err) {
        console.log(err)
    }
        

    }
    useEffect(() => {
        getTodos()
        console.log(todos)
    }, [])
    useEffect(() => {
        
    }, [todos])
    const handleItemDelete = async (id) => {
        try {
            await fetch(API + `/${id}`, { method: 'DELETE' });
            getTodos(n)
        } catch (err) {
            console.log(err)
        }
    }
    return todos.length ? <ul>
        {todos.map(item => <li key={item.id}>{item.title}<button onClick={()=> handleItemDelete(item.id)}>Delete</button></li>)}
  </ul>:null
}
