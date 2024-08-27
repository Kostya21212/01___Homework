import React from "react";
import ListRender from "./compontents/ListRender/ListRender";
import ObjectRender from "./compontents/ObjectRender/ObjectRender";
import { list } from "./mockedData/mockedData";
import List from "../../02__Lesson-Homework/src/components/List/List";
export default function App() {
  return (
    <>
      {/* <ListRender list={list} />
      <ObjectRender />
      <ListRender></ListRender> */}
      <List></List>
    </>
  );
}
