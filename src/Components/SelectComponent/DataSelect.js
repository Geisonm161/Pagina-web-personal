import React, { useState } from "react";
import Select from "react-select";
import Buttons from "../Buttons/Buttons";

function DataSelect() {
  const [priceTshirt, setPriceTshirt] = useState({
    model: 0,
    amount: 0,
    logoColor: 0,
    position: 0,
  });

  const [result, setResult] = useState();

  const OptionModel = [
    { label: "Select..." },
    { value: 210, label: "T-shirt Algodon", select: 1 },
    { value: 215, label: "T-shirt Ojo de Angel", select: 1 },
    { value: 200, label: "T-shirt Micro Durazno", select: 1 },
    { value: 800, label: "Hoodies sin zipper Algodon", select: 1 },
    { value: 790, label: "Hoodies con zipper Algodon", select: 1 },
    { value: 360, label: "Polo de cuello Algodon", select: 1 },
    { value: 350, label: "Polo de cuello Dry Fit", select: 1 },
    { value: 330, label: "Suera" },
  ];

  const OptionAmount = [
    { label: "Select..." },
    { value: 50, label: "Entre 12 y 39", select: 2 },
    { value: 25, label: "Entre 50 y 200", select: 2 },
    { value: 0, label: "300 o mas", select: 2 },
  ];

  const OptionLogoColor = [
    { label: "Select..." },
    { value: 50, label: "1", select: 3 },
    { value: 75, label: "2", select: 3 },
    { value: 100, label: "3 o mas", select: 3 },
  ];

  const OptionPosition = [
    { label: "Select..." },
    { value: 0, label: "Delante", select: 4 },
    { value: 0, label: "Detras", select: 4 },
    { value: priceTshirt.logoColor, label: "Ambas", select: 4 },
  ];

  const onChangeSelect = (value) => {
    console.log(value);
    if (value.select === 1) {
      setPriceTshirt({ ...priceTshirt, model: value.value });
    }
    if (value.select === 2) {
      setPriceTshirt({ ...priceTshirt, amount: value.value });
    }
    if (value.select === 3) {
      setPriceTshirt({ ...priceTshirt, logoColor: value.value });
    }
    if (value.select === 4) {
      setPriceTshirt({ ...priceTshirt, position: value.value });
    }
  }
    
   
    const sum =
      priceTshirt.model +
      priceTshirt.amount +
      priceTshirt.logoColor +
      priceTshirt.position;

  const Percha = () => {
    setResult();
  };
  return (
    <div className="w-3/4 font-serif sm:w-2/4">
      <h2>Modelo</h2>

      <div>
        <Select options={OptionModel} onChange={onChangeSelect} />
      </div>
      <h2 className="font-serif">Cantidad</h2>

      <div>
        <Select options={OptionAmount} onChange={onChangeSelect} />
      </div>


      <h2>Cantidad de colores que posee tu diseño</h2>

      <div>
        <Select options={OptionLogoColor} onChange={onChangeSelect} />
      </div>

      <h2>Posicion del diseño</h2>

      <div>
        <Select options={OptionPosition} onChange={onChangeSelect} />
      </div>

      <div className=" flex justify-between mt-3">
        <div>Costo por unidad: RD ${sum}</div>
        <Buttons
          nameButton={"Calcular"}
          onClick={() => Percha()}
          className="transition-none bg-green-600 px-5 py-1 rounded-md hover:border-b-2 hover:px-7 text-white"
        />
      </div>
    </div>
  );
}

export default DataSelect;
