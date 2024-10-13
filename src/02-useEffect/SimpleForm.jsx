import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState,setFormState] = useState({
        username: 'aaron2',
        email: 'agirong@gmail.com'
    })

    const {username,email} = formState;

    const onInputChange = ({target})=>{
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{
        // console.log('useEffect fue llamado..')
    },[]);

    useEffect(()=>{
        // console.log('formState fue cambiado..')
    },[formState]);

    useEffect(()=>{
        // console.log('email fue cambiado..')
    },[email]);

    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

          <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              name="username"
              value={username}
              onChange={onInputChange}
          />

          <input
              type="text"
              className="form-control mt-1"
              placeholder="ag@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
          />
          {
            (username === 'aaron2') && <Message/>
          }
          
    </>
  )
}
