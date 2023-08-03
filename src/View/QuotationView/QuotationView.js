import React from "react";
import { getItem } from "../../services/servicesLocalStorage/servicesLocalStorage";
import Buttons from "../../Components/Buttons/Buttons";

function QuotationView() {
  const datosStorage = getItem(process.env.REACT_APP_NAME_DATA_QUOTATION);

  const numberTotal = datosStorage.valueTotal * datosStorage.amount;
  
  const readableNumber = numberTotal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const readableNumberUnit = datosStorage.valueTotal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const objDatos = {
    Producto: datosStorage.model,
    Color: datosStorage.tshirtColor,
    Delantero_o_trasero: datosStorage.position,
    Colores_del_diseño: datosStorage.logoColor,
    Cantidad: datosStorage.amount,
    Size: datosStorage.amountAndSize,
    Precio_por_unidad: readableNumberUnit,
    Precio_Total: readableNumber,
  };

  const strObjeto = JSON.stringify(objDatos);

  const strSinComillas = strObjeto
    .replace(/"/g, " ")
    .replace(/'/g, " ")
    .replace(/}/g, " ")
    .replace(/_/g, " ")
    .replace(/{/g, " ");

  const sendWhatsAppMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=${8498600600}&text=${encodeURIComponent(
      strSinComillas
    )}`;
    window.open(url, "_blank");
  };


  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-fixed bg-cover bg-center min-h-screen bg-gradient-to-r from-indigo-500 ">
        <h2 className="text-4xl font-llora m-5">Costos detallados</h2>
        <div className="flex flex-col justify-center items-center sm:w-2/5 h-2/5 w-5/6 bg-gray-200 rounded-md">
          <div>
            <b>Producto:</b> {datosStorage.model}
          </div>
          <div>
            <b>Color:</b> {datosStorage.tshirtColor}
          </div>
          <div>
            <b>Diseño delante o detras:</b> {datosStorage.position}
          </div>
          <div>
            <b>Colores del diseño:</b> {datosStorage.logoColor}
          </div>
          <div>
            <b>{datosStorage.model}:</b> {datosStorage.amount} unidades
          </div>
          <div>
            <b>Precio por unidad:</b> {readableNumberUnit} pesos
          </div>
          <div>
            <b>Precio Total:</b> {readableNumber} pesos
          </div>
        </div>
        <div className="m-2">
          <Buttons
            onClick={sendWhatsAppMessage}
            nameButton="Enviar"
            className="transition-none bg-green-600 px-5 py-1 rounded-md hover:border-b-2 hover:px-7 text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default QuotationView;
