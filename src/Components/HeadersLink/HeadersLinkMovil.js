import React from 'react'

function HeadersLinkMovil() {
  return (
    <div className=' flex flex-col'>
    <a
      href="/Products"
      className="p-2 border-b hover:text-cyan-600 border-x-gray-200"
    >
      Productos
    </a>
    <a
      href="/Order"
      className="p-2 border-b hover:text-cyan-600 border-x-gray-200"
    >
      Realizar pedido
    </a>
    <a
      href="/Information"
      className="p-2 border-b hover:text-cyan-600 border-x-gray-200"
    >
      Sobre nosotros
    </a>
  </div>
  )
}

export default HeadersLinkMovil;