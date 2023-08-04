import { useState } from "react";
import Networks from "../../Components/Networks/Networks";
import HeadersLink from "../../Components/HeadersLink/HeadersLink";
import HeadersLinkMovil from "../../Components/HeadersLink/HeadersLinkMovil";
import { IconsClose, IconsMenu } from "../../Components/Icons/Icons";
import { useNavigate } from "react-router-dom";
import OptionWithColor from "../../Components/OptionWithColor/OptionWithColor";
import Select from "react-select";
import Buttons from "../../Components/Buttons/Buttons";
import Textarea from "../../Components/Textarea/Textarea";
import { setItem } from "../../services/servicesLocalStorage/servicesLocalStorage";
import Input from "../../Components/Input/Input";

const OrderView = () => {
  const [changeIcons, setChangeIcons] = useState();
  const navigation = useNavigate();

  const [priceTshirt, setPriceTshirt] = useState({
    tshirtColor: "",
    model: "",
    modelValue: 0,
    amount: 0,
    amountValue: 0,
    logoColor: "",
    logoColorValue: 0,
    position: "",
    positionValue: 0,
    amountAndSize: "",
    valueTotal: "",
  });

  const sum =
    priceTshirt.modelValue +
    priceTshirt.amountValue +
    priceTshirt.logoColorValue +
    priceTshirt.positionValue;

  const OptionModel = [
    { value: 210, label: "T-shirt Algodon", select: 1 },
    { value: 215, label: "T-shirt Ojo de Angel", select: 1 },
    { value: 200, label: "T-shirt Micro Durazno", select: 1 },
    { value: 800, label: "Hoodies sin zipper Algodon", select: 1 },
    { value: 790, label: "Hoodies con zipper Algodon", select: 1 },
    { value: 360, label: "Polo de cuello Algodon", select: 1 },
    { value: 350, label: "Polo de cuello Dry Fit", select: 1 },
    { value: 330, label: "Suera" },
  ];

  const OptionLogoColor = [
    { value: 50, label: "1", select: 3 },
    { value: 75, label: "2", select: 3 },
    { value: 100, label: "3 o mas", select: 3 },
  ];

  const OptionPosition = [
    { value: 10, label: "Delante", select: 4 },
    { value: 15, label: "Detras", select: 4 },
    { value: priceTshirt.logoColorValue, label: "Ambas", select: 4 },
  ];

  const options = [
    { value: "red", label: "Rojo", color: "red" },
    { value: "green", label: "Verde", color: "green" },
    { value: "blue", label: "Azul", color: "blue" },
    { value: "black", label: "Negro", color: "black" },
    { value: "yellow", label: "Amarillo", color: "yellow" },
    { value: "white", label: "Blanco", color: "white" },
    { value: "pink", label: "Rosado", color: "pink" },
    { value: "blue", label: "", color: "blue" },
  ];

  const onChangeSelect = (value) => {
    console.log(value);
    if (value.select === 1) {
      setPriceTshirt({
        ...priceTshirt,
        model: value.label,
        modelValue: value.value,
      });
    }
    if (value.select === 2) {
      setPriceTshirt({ ...priceTshirt, amountValue: value.value });
    }
    if (value.select === 3) {
      setPriceTshirt({
        ...priceTshirt,
        logoColor: value.label,
        logoColorValue: value.value,
      });
    }
    if (value.select === 4) {
      setPriceTshirt({
        ...priceTshirt,
        position: value.label,
        positionValue: value.value,
      });
    }
  };

  const onChangeSelectColor = (value) => {
    setPriceTshirt({ ...priceTshirt, tshirtColor: value.label });
  };

  const onChangeAmountAndSize = (e) => {
    setPriceTshirt({
      ...priceTshirt,
      amountAndSize: e.target.value,
      valueTotal: sum,
    });
  };

  const onChangeAmount = (e) => {
    const amount = e.target.value;
    if (amount < 11 && amount >= 0) {
      setPriceTshirt({
        ...priceTshirt,
        amountValue: 75,
        amount: parseInt(amount),
      });
    }
    if (amount < 40 && amount >= 12) {
      setPriceTshirt({
        ...priceTshirt,
        amountValue: 50,
        amount: parseInt(amount),
      });
    }
    if (amount < 99 && amount >= 41) {
      setPriceTshirt({
        ...priceTshirt,
        amountValue: 25,
        amount: parseInt(amount),
      });
    }
    if (amount < 5000 && amount >= 100) {
      setPriceTshirt({
        ...priceTshirt,
        amountValue: 0,
        amount: parseInt(amount),
      });
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "2px solid #e2e8f0",
      "&:hover": {
        borderColor: "#4299e1", // Color del borde al hacer hover en el control
      },
    }),
  };

  const setStorage = () => {
    if (
      priceTshirt.tshirtColor &&
      priceTshirt.model &&
      priceTshirt.modelValue &&
      priceTshirt.amount &&
      priceTshirt.logoColor &&
      priceTshirt.logoColorValue &&
      priceTshirt.position &&
      priceTshirt.positionValue &&
      priceTshirt.amountAndSize &&
      priceTshirt.valueTotal
    ) {
      setItem(process.env.REACT_APP_NAME_DATA_QUOTATION, priceTshirt);
      navigation("/Quotation");
      return;
    }

    alert("Todos los campos son obligatorios");

    if (priceTshirt.amount <= 5) {
      alert("La cantidad debe ser mayor a 5 unidades");
      return;
    }
  };

  return (
    <div className=" bg-fixed bg-cover bg-center min-h-screen bg-gradient-to-r from-indigo-500">
      <div className=" flex items-center justify-between h-14 bg-black opacity-80 px-2">
        <Networks />
      </div>
      <div className="flex items-center justify-between  inset-y-0 bottom-0 h-20 bg-gradient-to-tr p-2 via-slate-500 to-transparent rounded-2xl">
        <h1
          className=" px-2 text-black border-4 border-black  inline-block text-2xl font-serif rounded-xl font-semibold md:text-3xl cursor-pointer"
          onClick={() => navigation("/")}
        >
          FANS-SERI
        </h1>
        <div className="hidden md:flex text-white text-2xl font-llora relative">
          <HeadersLink routeOrder={true} />
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
      <h1 className="flex justify-center text-cyan-800 text-4xl m-2 font-llora">
        Orden
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-3/4 font-serif sm:w-2/4">
          <h2>Seleccionar color</h2>
          <Select
            options={options}
            onChange={onChangeSelectColor}
            components={{ Option: OptionWithColor }}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#edf2f7",
                primary: "#4299e1",
              },
            })}
          />
        </div>{" "}
      </div>
      <div className="flex justify-center items-center">
        <div className="w-3/4 font-serif sm:w-2/4">
          <h2>Modelo</h2>

          <div>
            <Select options={OptionModel} onChange={onChangeSelect} />
          </div>
          <h2 className="font-serif">Cantidad</h2>

          <div>
            <Input
              onChange={onChangeAmount}
              className="w-full h-10 rounded-md p-2"
              type="number"
            />
          </div>

          <h2>Cantidad de colores que posee tu diseño</h2>

          <div>
            <Select options={OptionLogoColor} onChange={onChangeSelect} />
          </div>

          <h2>Posicion del diseño</h2>

          <div>
            <Select options={OptionPosition} onChange={onChangeSelect} />
          </div>

          <h2>Escriba los size y al lado la cantidad</h2>

          <div>
            <Textarea
              onChange={onChangeAmountAndSize}
              className="transition-none w-full font-serif h-10 rounded-md p-2 text-gray-600"
            />
          </div>

          <div className=" flex justify-center mt-3">
            <Buttons
              onClick={setStorage}
              nameButton="Cotizar"
              className="transition-none bg-green-600 px-5 py-1 rounded-md hover:border-b-2 hover:px-7 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderView;
