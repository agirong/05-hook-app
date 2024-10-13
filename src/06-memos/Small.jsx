import React from 'react'

export const Small = React.memo(({value}) => {
     console.log('Me ejecute :(')
  return (
    <small>{value}</small>
  )
})
