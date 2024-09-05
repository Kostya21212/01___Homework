import React from 'react'
// import { animals } from '../../mockedData/mockedData'
import functionRender from '../../functionRender/functionRender'
export default function ListRender({ list=[] }) {
    

    console.log('connect with server')
    return list.length ?
        <ul>
            {list.map((item, i) => (
                <li key={i}>{functionRender(item)}</li>
            ))}
        </ul> : null;
}
