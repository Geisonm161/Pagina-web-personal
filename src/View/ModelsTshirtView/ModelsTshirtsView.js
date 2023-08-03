import React, { useState } from "react";
import Networks from "../../Components/Networks/Networks";
import ModelsTshirt from "../../Assets/Model-variedad-tshirt.png";
import ModelsSuera from "../../Assets/Model-black-suera.png";
import ModelsHoodie from "../../Assets/Model-black-hoodie.png";
import ModelsPolo from "../../Assets/Model-black-polo.png";
import ModelsHoodieGray from "../../Assets/Model-gray-hoodie.png";
import HeadersLink from "../../Components/HeadersLink/HeadersLink";
import { IconsClose, IconsMenu } from "../../Components/Icons/Icons";
import { useNavigate } from "react-router-dom";
import HeadersLinkMovil from "../../Components/HeadersLink/HeadersLinkMovil";

function ModelsTshirtsView() {
  const [changeIcons, setChangeIcons] = useState();
  const navigation = useNavigate();

  return (
    <div className=" bg-fixed bg-cover bg-center min-h-screen bg-gradient-to-r from-indigo-500 pb-7 ">
      <div className=" flex items-center justify-between h-14 bg-black opacity-80 px-2">
        <Networks />
      </div>
      <div className="flex items-center justify-between  inset-y-0 bottom-0 h-20 bg-gradient-to-tr p-2 via-slate-500 to-transparent">
      <h1 className=" px-2 text-black border-4 border-black  inline-block text-2xl font-serif rounded-xl font-semibold md:text-3xl cursor-pointer" onClick={() => navigation("/")}>
            FANS-SERI
          </h1>
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
      <h1 className=" flex justify-center text-gray-800 m-5 text-5xl font-llora">
        -Modelos-
      </h1>

      <div className="flex flex-wrap justify-center" >
        <div className="flex flex-col items-center" onClick={()=>navigation('T-shirt')}>
          <img src={ModelsTshirt} alt="t-shirt" className="w-48" />
          <p className="flex justify-center items-center w-40 h-7 bg-cyan-800 hover:bg-cyan-950 rounded-md text-white cursor-pointer hover:underline">
            T-shirt
          </p>
        </div>

        <div className="flex flex-col items-center" onClick={()=>navigation('Suera')}>
          <img src={ModelsSuera} alt="t-shirt" className="w-48" />
          <p className="flex justify-center items-center w-40 h-7 bg-cyan-800 hover:bg-cyan-950 rounded-md text-white cursor-pointer hover:underline">
            Suera
          </p>
        </div>

        <div className="flex flex-col items-center" onClick={()=>navigation('Polo')}>
          <img src={ModelsPolo} alt="t-shirt" className="w-48" />
          <p className="flex justify-center items-center w-40 h-7 bg-cyan-800 hover:bg-cyan-950 rounded-md text-white cursor-pointer hover:underline">
            Polo
          </p>
        </div>

        <div className="flex flex-col items-center" onClick={()=>navigation('Hoodie')}>
          <img src={ModelsHoodie} alt="t-shirt" className="w-48" />
          <p className="flex justify-center items-center w-40 h-7 bg-cyan-800 hover:bg-cyan-950 rounded-md text-white cursor-pointer hover:underline">
            Hoodie con zipper
          </p>
        </div>

        <div className="flex flex-col items-center" onClick={()=>navigation('Hoodie')}>
          <img src={ModelsHoodieGray} alt="t-shirt" className="w-48" />
          <p className="flex justify-center items-center w-40 h-7 bg-cyan-800 hover:bg-cyan-950 rounded-md text-white cursor-pointer hover:underline">
            Hoodie sin zipper
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModelsTshirtsView;
