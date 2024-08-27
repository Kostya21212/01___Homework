import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function List() {
    const [list, setList] = useState(["cat", "dog", "lion"]);
    useEffect(function () {
        
        console.log('in useEffect')
    });
    const handleRemoveLastItem = () => {
         setList(list.slice(0, -1))
    }
    
    // const timeOutId = setTimeout(() => {
    //     console.log('in setTimeout', timeOutId)
       
    // }, 1000);

    return list.length ? (
      <>
      
    <ul>
      
      {list.map((item, index) => (
          <ListItem key={index} item={item} />
      ))}{" "}
      </ul>
            <button onClick={handleRemoveLastItem}>Remove item</button>
    </>
  ) : null;
}
