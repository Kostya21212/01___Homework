import React from 'react'
import Todos from './components/Todos/Todos'


function App() {
  const liftedNewTodo = item => {
   console.log('in App :', item)
 }
  return (
    <>
      <Todos liftingNewTodoToApp={liftedNewTodo}></Todos>
    </>
  )
}

export default App
