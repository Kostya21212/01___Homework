import React from 'react'
import { user } from '../../mockedData/mockedData'

export default function ObjectRender({text}) {
  return (
      <ul>
          {Object.keys(user).map((item, i) => <li key={i}>{user[item]}</li>)}
          {text}
    </ul>
  )
}
