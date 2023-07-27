import React from "react";

function HeadersLink() {
  return (
    <div>
      <a
        href="/Products"
        className="  p-4 pt-6 hover:text-cyan-900 hover:border-t-4 hover:border-blue-800 hover:transition-all duration-1000 ease-in-out
      "
      >
        Productos
      </a>
      <a
        href="/Order"
        className="p-4 pt-6 hover:border-t-4 hover:text-cyan-900 hover:border-blue-800 hover:transition-all duration-1000 ease-in-out"
      >
        Realizar pedido
      </a>
      <a
        href="/products"
        className="p-4 pt-6 hover:border-t-4 hover:text-cyan-900 hover:border-blue-800 hover:transition-all duration-1000 ease-in-out"
      >
        Galeria
      </a>
      <a
        href="/contact"
        className="p-4 pt-6 hover:border-t-4 hover:text-cyan-900 hover:border-blue-800 hover:transition-all duration-1000 ease-in-out"
      >
        Redes y Ubicación
      </a>
    </div>
  );
}

export default HeadersLink;
