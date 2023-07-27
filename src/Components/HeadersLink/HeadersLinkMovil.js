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
      href="/products"
      className="p-2 border-b hover:text-cyan-600 border-x-gray-200"
    >
      Galeria
    </a>
    <a
      href="/contact"
      className="p-2 border-b hover:text-cyan-600 border-x-gray-200"
    >
      Redes y Ubicación
    </a>
  </div>
  )
}

export default HeadersLinkMovil;