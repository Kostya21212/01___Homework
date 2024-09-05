import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import './style.sass'
export default function List() {

    const [list, setList] = useState(['cat', 'dog', 'lion']);
    useEffect(function(){
        console.log('in useEffect for componentDidMount')
    
    const timeOutId = setTimeout(() => {
        console.log('in setTimeout', timeOutId)
        setList(list.slice(0, -1));
       
        }, 1000);
    }, [])
    
    useEffect(function () {
        console.log('in second UseEffecr for componentDidMont()');
        console.log('connection service')
    }, [])
    useEffect(() => {
        console.log('in useEffect for list')
        console.log(list)
    },[list])
    const handleRemoveLastItem = () => {
        setList(list.slice(0, -1))
        
    }
    return list.length ? (
        <>
        <ul>
            {list.map((item, i) => <ListItem key={i} item ={item} ></ListItem>)}
        </ul>
        <button onClick={handleRemoveLastItem}>Remove</button>
        </>
        
    ):null
    
}
