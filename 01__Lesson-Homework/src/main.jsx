
import { createRoot } from 'react-dom/client'
const Heading = (props) => {
    const style = {color:props.color} 
  return <h1 style={style}>{props.text}</h1>
 }
const Description = (props) => {
  const userName = prompt('What is your name?', '')
  // const style = {fontStyle:props.fontStyle}
  return <h2 style={{fontStyle:props.fontStyle}}>{userName}{props.text}</h2>
  }

createRoot(document.getElementById('root')).render(
 
  <>
    <Heading text = 'Hello, world!' color= 'crimson' />
    <Description text="'s first React application." fontStyle= 'italic'/>
  </>
 
)
