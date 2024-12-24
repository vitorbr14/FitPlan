import { Atom } from "lucide-react";
import React from "react";

type Beneficio = {
  titulo: string;
  texto: string;
};
type BeneficiosItemsType = {
  beneficio: Beneficio;
};
export const BeneficiosItems = ({ beneficio }: BeneficiosItemsType) => {
  return (
    <>
      <div className="text-center ">
        <div className="m-auto text-center flex justify-center">
          <Atom
            size={50}
            strokeWidth={1.5}
            color="#1d4ed8"
            className="bg-blue-100 "
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold pt-4  ">{beneficio.titulo}</h1>
          <p className="text-base text-gray-600 mt-2 ">{beneficio.texto}</p>
        </div>
      </div>
    </>
  );
};
