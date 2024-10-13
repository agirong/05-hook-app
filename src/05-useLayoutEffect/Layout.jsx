import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const Layout = () => {
   const {counter,increment,decrement} = useCounter();
   const {data,isLoading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  return (
    <>    
    <h1>Informacion del Pokemon</h1>
    <hr />
    {
    isLoading
    ?<LoadingMessage/>
    :(
     <PokemonCard 
        id={data.id} 
        name={data.name}
        sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
        ]}
     />)}
    <pre>{data?.name}</pre>

    <button className="btn btn-primary mt2" onClick={()=> counter >1 ? decrement():null}>Anterior</button>
    <button className="btn btn-primary mt2" onClick={()=>increment()}>Siguiente</button>
    </>
  )
}
