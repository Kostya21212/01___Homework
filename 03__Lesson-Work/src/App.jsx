import React, {useEffect, useState} from 'react'

import List from './components/List'
import StateExample from './components/StateExample/StateExample'
function App() {
  const [showList, setShowList] = useState(true)
  const handleListRemove = () => setShowList(false)
  const handleListAdd = () => setShowList(true)
  useEffect(function () {
    console.log('in useEffect')
  })
  return (
    <>
      {showList && <List></List>}
      <button onClick={handleListRemove}>Remove list component</button>
      <button onClick={handleListAdd}>Add list component</button>
      <StateExample></StateExample>
    </>
  );
}

export default App
