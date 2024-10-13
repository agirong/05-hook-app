import {useState} from 'react'
import { useCounter } from '../hooks/useCounter'
import { useMemo } from 'react'

const heavyStoff =(iterationNumber)=>{
  for(let i = 0; i<iterationNumber; i++){
    console.log('Ahi vamos')
  }
  return `${iterationNumber} iteradas`
}

export const MemoHook = () => {
    const {increment,counter} = useCounter(3000);
    const [show, setShow] = useState(true)

    const memoValue = useMemo(()=>heavyStoff(counter),
    [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />
        <h4>{memoValue}</h4>
        <button className="btn btn-primary" onClick={() => increment()}>+1</button>
        <button className="btn btn-primary" onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
