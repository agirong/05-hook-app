import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initState = [
    {
        id:1,
        description:'Recoletar piedras',
        done:false,
    },
    {
        id:2,
        description:'Ir al bosque',
        done: false
    }
]

export const TodoApp = () => {
    const [state, dispatch] = useReducer(todoReducer, initState)
    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <ul>
                <li>Item1</li>
                <li>Item2</li>
            </ul>
        </>
    )
}
