import React from 'react'

function Input({onChange, onClick, className, type}) {
  return (
    <div>
        <input onChange={onChange} className={className} onClick={onClick} type={type} placeholder='Mayor a 5 unidades' />
    </div>
  )
}

export default Input