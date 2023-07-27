import React, { useState } from "react";
import Networks from "../../Components/Networks/Networks";
import Image from "../../Assets/logo_Mesa de trabajo 1.png";
import Model1 from "../../Assets/model1.png";
import Model2 from "../../Assets/model2.png";
import Model3 from "../../Assets/model3.png";
import Model4 from "../../Assets/model4.png";
import Model5 from "../../Assets/model5.png";
import Model6 from "../../Assets/model6.png";
import Model7 from "../../Assets/model7.png";
import Model8 from "../../Assets/model8.png";
import Model9 from "../../Assets/model9.png";
import Model10 from "../../Assets/model10.png";
import Model11 from "../../Assets/model11.png";
import Model12 from "../../Assets/model12.png";
import Suera1 from "../../Assets/suera1.png";
import Suera2 from "../../Assets/suera2.png";
import Suera3 from "../../Assets/suera3.png";
import Suera4 from "../../Assets/suera4.png";
import Suera5 from "../../Assets/suera5.png";
import Polo1 from "../../Assets/polo1.png";
import polo2 from "../../Assets/polo2.png";
import Polo3 from "../../Assets/polo3.png";
import polo4 from "../../Assets/polo4.png";
import polo5 from "../../Assets/polo5.png";
import Polo6 from "../../Assets/polo6.png";

import Hoodie1 from "../../Assets/hoodie1.png";
import Hoodie2 from "../../Assets/hoodie2.png";
import Hoodie3 from "../../Assets/hoodie3.png";
import Hoodie4 from "../../Assets/hoodie4.png";
import Hoodie5 from "../../Assets/hoodie5.png";
import Hoodie6 from "../../Assets/hoodie6.png";
import Hoodie7 from "../../Assets/hoodie7.png";
import Suera6 from "../../Assets/suera6.png";
import HeadersLink from "../../Components/HeadersLink/HeadersLink";
import { IconsClose, IconsMenu } from "../../Components/Icons/Icons";
import { useNavigate, useParams } from "react-router-dom";
import HeadersLinkMovil from "../../Components/HeadersLink/HeadersLinkMovil";
function ShowTshirtView() {
  const [changeIcons, setChangeIcons] = useState();
  const navigation = useNavigate();
  const { Article } = useParams();
  console.log(Article);

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
      <h1 className=" flex justify-center text-gray-800 m-5 text-5xl font-llora">
        -Muestra de {Article}-
      </h1>
      {Article === "T-shirt" && (
        <div className="flex flex-wrap justify-center">
          <img src={Model1} alt="t-shirt" className="w-96" />
          <img src={Model2} alt="t-shirt" className="w-96" />
          <img src={Model3} alt="t-shirt" className="w-96" />
          <img src={Model4} alt="t-shirt" className="w-96" />
          <img src={Model5} alt="t-shirt" className="w-96" />
          <img src={Model6} alt="t-shirt" className="w-96" />
          <img src={Model7} alt="t-shirt" className="w-96" />
          <img src={Model8} alt="t-shirt" className="w-96" />
          <img src={Model9} alt="t-shirt" className="w-96" />
          <img src={Model10} alt="t-shirt" className="w-96" />
          <img src={Model11} alt="t-shirt" className="w-96" />
          <img src={Model12} alt="t-shirt" className="w-96" />
        </div>
      )}

      {Article === "Hoodie" && (
        <div className="flex flex-wrap justify-center">
          <img src={Hoodie1} alt="t-shirt" className="w-96 m-4" />
          <img src={Hoodie2} alt="t-shirt" className="w-96 m-4" />
          <img src={Hoodie3} alt="t-shirt" className="w-96 m-4" />
          <img src={Hoodie4} alt="t-shirt" className="w-96 m-4" />
          <img src={Hoodie5} alt="t-shirt" className="w-96 m-4" />
          <img src={Hoodie6} alt="t-shirt" className="w-96 m-4" />
        </div>
      )}

      {Article === "Polo" && (
        <div className="flex flex-wrap justify-center">
          <img src={Polo1} alt="t-shirt" className="w-96 m-4" />
          <img src={polo2} alt="t-shirt" className="w-96 m-4" />
          <img src={Polo3} alt="t-shirt" className="w-96 m-4" />
          <img src={polo4} alt="t-shirt" className="w-96 m-4" />
          <img src={polo5} alt="t-shirt" className="w-96 m-4" />
          <img src={Polo6} alt="t-shirt" className="w-96 m-4" />

          
        </div>
      )}

      {Article === "Suera" && (
        <div className="flex flex-wrap justify-center">
          <img src={Suera1} alt="t-shirt" className="w-96" />
          <img src={Suera2} alt="t-shirt" className="w-96" />
          <img src={Suera3} alt="t-shirt" className="w-96" />
          <img src={Suera4} alt="t-shirt" className="w-96" />
          <img src={Suera5} alt="t-shirt" className="w-96" />
          <img src={Suera6} alt="t-shirt" className="w-96" />
        </div>
      )}
    </div>
  );
}

export default ShowTshirtView;
