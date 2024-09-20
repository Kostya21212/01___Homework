import { useState } from 'react'
import Todos from './components/Todos/Todos'


function App() {


  return <>
  <Todos liftingNewTodoToApp={liftNewTodo}></Todos>
  </> 
}

export default App
