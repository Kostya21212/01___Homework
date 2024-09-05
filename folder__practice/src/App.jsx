import React from "react"
import ListRender from "./components/ListRender/ListRender"
import ObjectRender from "./components/ObjectRender/ObjectRender"
import text from "./components/text"
import { animals } from './mockedData/mockedData'
import List from "./components/List/List"

function App() {
  const analityc = true;
  const analityc2 = true;

  return (
    <>
      {/* {analityc && <ListRender list={animals} color="red"></ListRender>}
      <ObjectRender text={text}></ObjectRender>
      {analityc2 && <ListRender></ListRender>} */}
      <List></List>
    </>
  );
}

export default App
