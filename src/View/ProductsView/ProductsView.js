import React, { useState } from "react";
import Networks from "../../Components/Networks/Networks";
import Modelos from "../../Assets/modelos.png";
import HeadersLink from "../../Components/HeadersLink/HeadersLink";
import { IconsClose, IconsMenu } from "../../Components/Icons/Icons";
import { useNavigate } from "react-router-dom";
import HeadersLinkMovil from "../../Components/HeadersLink/HeadersLinkMovil";
import Logo from "../../Assets/logo-fans-seri-01.png";

const ProductosView = () => {
  const [changeIcons, setChangeIcons] = useState();
  const navigation = useNavigate();

  return (
    <div className=" bg-fixed bg-cover bg-center min-h-screen bg-gradient-to-r from-indigo-500">
      <div className=" flex items-center justify-between h-14 bg-black opacity-80 px-2">
        <Networks />
      </div>
      <div className="flex items-center justify-between  inset-y-0 bottom-0 h-20 bg-gradient-to-tr p-2 via-slate-500 to-transparent">
        <img
          src={Logo}
          alt="Logo"
          className=" px-2 border-2 border-black  inline-block w-40 font-serif rounded-xl font-semibold md:w-48 cursor-pointer hover:w-52"
          onClick={() => navigation("/")}
        />

        <div className="hidden md:flex ">
          <HeadersLink routeProductos={true} />
        </div>

        <div className="md:hidden" onClick={() => setChangeIcons(!changeIcons)}>
          {changeIcons ? <IconsClose /> : <IconsMenu />}
        </div>
      </div>
      <div
        className={`bg-white w-full overflow-hidden  ${
          changeIcons ? "max-h-44" : "max-h-0"
        }  `}
      >
        <HeadersLinkMovil />
      </div>
      <h1 className=" flex justify-center text-gray-800 mt-5 md:text-4xl text-3xl font-llora">
        -_Productos_-
      </h1>
      <div
        className="flex justify-center"
        onClick={() => console.log(navigation("/Models"))}
      >
        <div className="flex items-center flex-col px-10">
          <img
            src={Modelos}
            alt="Modelos de camisetas"
            className="w-60 mt-10"
          />
          <div className=" flex justify-center items-center w-72 h-7 bg-cyan-800 hover:bg-cyan-950 rounded-md text-white cursor-pointer hover:underline">
            Camisetas y mas
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductosView;
