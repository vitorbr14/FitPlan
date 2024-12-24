import React from "react";
import { ContainerLanding } from "./ContainerLanding";
import beneficios_pic from "../../assets/menworkingout.jpg";
import { Separator } from "../ui/separator";
import { BeneficiosItems2 } from "./BeneficiosItems2";
export const Beneficios2 = () => {
  return (
    <div className="md:py-20 py-10 h-auto flex  items-center justify-center">
      <ContainerLanding>
        <div className="grid grid-cols-12 w-full ">
          <div className="md:col-span-6 col-span-12 flex items-center">
            <img
              src={beneficios_pic}
              className="w-[600px] h-[600px] object-contain hidden md:block"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <div>
              <h4 className="text-lg text-blue-700 font-bold">
                A solução completa para sua academia
              </h4>
              <h1 className="text-xl xl:text-3xl py-6 font-semibold">
                FitPlan oferece soluções práticas e inteligentes para sua
                academia.
              </h1>
              <div className="pb-6">
                <Separator />

                <div className="pt-6">
                  <BeneficiosItems2 />
                  <BeneficiosItems2 />
                  <BeneficiosItems2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLanding>
    </div>
  );
};
