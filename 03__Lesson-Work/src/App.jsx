import React, {useState} from 'react'
import StateExample from './components/StateExample/StateExample'
import List from './components/List'
function App() {
  const [showList, setShowList] = useState(true)
  const handleListRemove = () => setShowList(false)
  return (
    <>
      {/* <StateExample></StateExample> */}
      <button onClick={handleListRemove}>Remove List Cmponent</button>
      {showList && <List></List>}
    </>
  )
}

export default App
