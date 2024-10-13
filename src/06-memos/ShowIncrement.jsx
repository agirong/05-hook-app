import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('Me volvia a generar...')
  return (
    <button 
        className="btn btn-secondary"
        onClick={()=>{
            increment(5);
        }}
        >
            Incrementar
        </button>    
  )
})
