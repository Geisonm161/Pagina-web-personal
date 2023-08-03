import React, { useState } from "react";
import Networks from "../../Components/Networks/Networks";
import HeadersLink from "../../Components/HeadersLink/HeadersLink";
import { IconsClose, IconsMenu } from "../../Components/Icons/Icons";
import { useNavigate } from "react-router-dom";
import HeadersLinkMovil from "../../Components/HeadersLink/HeadersLinkMovil";

function PageInformation() {
  const [changeIcons, setChangeIcons] = useState();
  const navigation = useNavigate();

  return (
    <div className="bg-fixed bg-cover bg-center min-h-screen bg-gradient-to-r from-indigo-500 ">
      <div className=" flex items-center justify-between h-14 bg-black opacity-80 px-2">
        <Networks />
      </div>
      <div className="flex items-center justify-between  inset-y-0 bottom-0 h-20 bg-gradient-to-tr p-2 via-slate-500 to-transparent">
          <h1 className=" px-2 text-black border-4 border-black  inline-block text-2xl font-serif rounded-xl font-semibold md:text-3xl cursor-pointer" onClick={() => navigation("/")}>
            FANS-SERI
          </h1>

        <div className="hidden md:flex text-cyan-100 text-2xl font-llora relative">
          <HeadersLink routePageInfo={true} />
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
      <div className="flex justify-center">
        <h1 className=" px-2 text-black border-4 border-black m-8 inline-block text-2xl font-serif rounded-xl font-semibold md:text-3xl">
          FANS-SERI
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="flex justify-center items-center w-3/4 cursor-pointer ">
          Somos especialistas en marcaje textil, serigrafía, sublimación,
          bordado, DTF y mas... ¡Descubre el Arte Impreso en Nuestro Taller:
          Serigrafía, Sublimación y DTF! <br /> <br />
          ¿Buscas dar vida a tus ideas creativas y llevarlas a otro nivel?
          ¡Estás en el lugar indicado! En nuestro taller, nos especializamos en
          técnicas de impresión de vanguardia: serigrafía, sublimación y DTF
          (Direct-to-Film). Permítenos llevarte a un viaje fascinante a través
          del mundo de la impresión y descubre por qué elegir nuestro taller
          será una experiencia inolvidable.
          <br /> <br />
          Así que, ¿estás listo para dar vida a tus ideas y dejar una impresión
          duradera en el mundo? ¡Ven a nuestro taller y descubre el poder del
          arte impreso a través de la serigrafía, la sublimación y el DTF! Te
          esperamos con los brazos abiertos y la promesa de hacer de tu
          experiencia con nosotros algo verdaderamente excepcional.
        </p>
      </div>
    </div>
  );
}

export default PageInformation;
