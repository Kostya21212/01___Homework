
import { createRoot } from 'react-dom/client'
import React from 'react'
import './style.css'
const animal = 'cat'
const heading_1 = <><h1 className='heading__1'> Hello world! </h1><em>!!!!</em></>;
const heading_2 = <h2 className='heading__2'> Hello world! </h2>;
const heading_3 = <h3 className='heading__3'>{animal}</h3>
const heading_4 = <h4 className='heading__4'>{30 - 21}</h4>
const list =
  <ol>
      <li>{heading_1}</li>
      <li>{heading_2}</li>
      <li>{heading_3}</li>
      <li>{heading_4}</li>
  </ol>

const TextCard = (props) => {
  const paragraphStyle = {color: props.color, fontWeight: 700, margin: '10px'}
    return <p style={paragraphStyle}>{props.text}</p>
  }
createRoot(document.getElementById('root')).render(
  <>
    {/* {list} */}
    <TextCard text = 'first' color= 'red'></TextCard>
    <TextCard text = 'second' color= 'blue'></TextCard>
    <TextCard text = 'third' color= 'orange'></TextCard>
    <TextCard text = 'fourth' color= 'violet'></TextCard>
  </>)
