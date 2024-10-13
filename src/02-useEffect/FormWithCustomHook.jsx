import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const {formState, onInputChange, username,email,pass,onResetForm} = useForm({
        username: '',
        email: '',
        pass:''        
    })

    // const {username,email,pass} = formState;

    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
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

            <input
                type="text"
                className="form-control mt-1"
                placeholder="Pass"
                name="pass"
                value={pass}
                onChange={onInputChange}
            />
            <button className="btn btn-danger mt-2" onClick={onResetForm}>Borrar</button>
        </>
    )
}
