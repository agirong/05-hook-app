import React from 'react'

export const PokemonCard = ({id,name,sprites = []}) => {
  return (
   <section>
    <h2 className='text-capitalize'>Id: {id} - Nombre: {name} </h2>
    
    <div>
        {
            sprites.map(sprite =>(
                <img key={sprite} src={sprite} />
            ))
        }
    </div>
   </section>
  )
}
