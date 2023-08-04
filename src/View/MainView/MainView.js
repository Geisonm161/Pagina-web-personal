import React, { useState } from "react";
import "../../index.css";
import Networks from "../../Components/Networks/Networks";
import HeadersLink from "../../Components/HeadersLink/HeadersLink";
import HeadersLinkMovil from "../../Components/HeadersLink/HeadersLinkMovil";
import { IconsClose, IconsMenu } from "../../Components/Icons/Icons";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo-fans-seri-01.png";
import Candidatura from '../../Assets/Candidatura.png';

const MainView = ()=> {
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
      <div className="flex items-center justify-center text-5xl font-llora h-auto bg-black  text-white">
      <img src={Candidatura} alt="arte" className="flex items-center justify-center text-5xl font-llora h-auto md:h-96 bg-black text-white" />
      </div>
    </div>
  );
}

export default MainView;
