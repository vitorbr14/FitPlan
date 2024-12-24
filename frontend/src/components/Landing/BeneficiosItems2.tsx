import { Check } from "lucide-react";
import React from "react";

export const BeneficiosItems2 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center py-4">
      <div className="bg-blue-200 p-1 rounded-full">
        <Check size={50} color="white" />
      </div>

      <div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-medium">Lorem ipsum dolor sit.</h1>
          <h3 className="text-sm md:text-base font-normal text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            maxime mollitia incidunt quibusdam laudantium officiis!
          </h3>
        </div>
      </div>
    </div>
  );
};
