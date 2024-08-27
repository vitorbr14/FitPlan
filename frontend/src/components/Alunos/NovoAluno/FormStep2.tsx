import { Input } from "@/components/ui/input";
import { TypesFormSteps } from "@/types/types";

import { Label } from "@radix-ui/react-label";
import React from "react";

export const FormStep2 = ({}: TypesFormSteps) => {
  return (
    <>
      <div className="col-span-3 ">
        <div>
          <Label className="text-xs">CEP</Label>
          <Input className="h-7" />
        </div>
      </div>
      <div className="col-span-7 ">
        <div>
          <Label className="text-xs">Endereço</Label>
          <Input className="h-7" />
        </div>
      </div>
      <div className="col-span-2 ">
        <div>
          <Label className="text-xs">Número</Label>
          <Input className="h-7" />
        </div>
      </div>
      <div className="col-span-4 ">
        <div>
          <Label className="text-xs">Complemento</Label>
          <Input className="h-7" />
        </div>
      </div>

      <div className="col-span-8 ">
        <div>
          <Label className="text-xs">Bairro</Label>
          <Input className="h-7" />
        </div>
      </div>

      <div className="col-span-7 ">
        <div>
          <Label className="text-xs">Cidade</Label>
          <Input className="h-7" />
        </div>
      </div>

      <div className="col-span-5 ">
        <div>
          <Label className="text-xs">Estado</Label>
          <Input className="h-7" />
        </div>
      </div>
    </>
  );
};
