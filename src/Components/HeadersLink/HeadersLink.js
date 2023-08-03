import React from "react";

function HeadersLink({routeProductos, routeOrder,routePageInfo}) {
  return (
    <div className="text-cyan-100 text-2xl font-llora relative">
      <a
        href="/Products"
        className={`p-4 pt-6 hover:text-cyan-900 hover:border-t-4 hover:border-blue-800 hover:transition-all duration-1000 ease-in-out ${routeProductos && 'text-cyan-900 border-t-4 border-blue-800'}`}
      >
        Productos
      </a>
      <a
        href="/Order"
        className={`p-4 pt-6 hover:border-t-4 hover:text-cyan-900 hover:border-blue-800 hover:transition-all duration-1000 ease-in-out ${routeOrder && 'text-cyan-900 border-t-4 border-blue-800'}`}
      >
        Realizar pedido
      </a>
      <a
        href="/Information"
        className={`p-4 pt-6 hover:border-t-4 hover:text-cyan-900 hover:border-blue-800 hover:transition-all duration-1000 ease-in-out ${routePageInfo && 'text-cyan-900 border-t-4 border-blue-800'}`}
      >
        Sobre nosotros
      </a>
    </div>
  );
}

export default HeadersLink;
