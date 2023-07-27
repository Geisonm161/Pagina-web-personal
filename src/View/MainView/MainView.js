import React, { useState } from "react";
import "../../index.css";
import Networks from "../../Components/Networks/Networks";
import Image from "../../Assets/logo_Mesa de trabajo 1.png";
import HeadersLink from "../../Components/HeadersLink/HeadersLink";
import HeadersLinkMovil from "../../Components/HeadersLink/HeadersLinkMovil";
import { IconsClose, IconsMenu } from "../../Components/Icons/Icons";
import { useNavigate } from "react-router-dom";

function MainView() {
  const [changeIcons, setChangeIcons] = useState();
  const navigation = useNavigate();

  return (
    <div className=" bg-fixed bg-cover bg-center min-h-screen bg-gradient-to-r from-indigo-500">
      <div className=" flex items-center justify-between h-14 bg-black opacity-80 px-2">
        <Networks />
      </div>
      <div className="flex items-center justify-between  inset-y-0 bottom-0 h-20 bg-gradient-to-tr p-2 via-slate-500 to-transparent">
        <img
          className=" w-40 border-2 border-white rounded-lg cursor-pointer"
          src={Image}
          alt="Logo"
          onClick={() => navigation("/")}
        />
        <div className="hidden md:flex text-cyan-100 text-2xl font-llora relative">
          <HeadersLink />
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
      <div className="flex items-center justify-center text-5xl font-llora h-96 bg-black opacity-80 text-white">
        PENDIENTE
      </div>
    </div>
  );
}

export default MainView;
