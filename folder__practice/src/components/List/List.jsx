import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
export default function List() {
    const [list, setList] = useState(['cat', 'dog', 'lion', 'parrot']);
    const [color,setColor] = useState('blue')
    useEffect(() => {
        setTimeout(() => {
            setList(list.slice(0, -1));
            
        }, 1000);
        
    },[])
    useEffect(() => {
        setTimeout(() => {
          setColor("red");
        }, 5000);
    })
    console.log(list)


    return (list.length ? <ul>{list.map((item, i) => <li key={i} style={{color}}>{item}</li>)}</ul> :null
  )
}
