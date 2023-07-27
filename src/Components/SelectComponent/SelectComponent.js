import React from "react";
import Select from "react-select";
import OptionWithColor from "../OptionWithColor/OptionWithColor";

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "2px solid #e2e8f0",
    "&:hover": {
      borderColor: "#4299e1", // Color del borde al hacer hover en el control
    },
  }),
};

const SelectComponent = () => {
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

  return (
    <div className="w-3/4 font-serif sm:w-2/4">
        <h2>Seleccionar color</h2>
      <Select
        options={options}
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
    </div>
  );
};

export default SelectComponent;
