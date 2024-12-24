import React from "react";
import { Button } from "../ui/button";

export const LandingCTA = () => {
  return (
    <div className="py-32 cta_landing ">
      <div className="flex justify-center items-center text-center px-4">
        <div className="text-white">
          <h1 className="md:text-3xl font-bold">
            Teste grátis por 14 dias! Descubra como é fácil gerenciar sua
            academia.
          </h1>
          <h3 className="md:w-3/4 m-auto py-4">
            Faça um teste gratuito por 14 dias e descubra como o FitPlan pode
            simplificar a gestão da sua academia. Sem complicação e sem
            compromisso!
          </h3>
          <Button variant="secondary">Se juntar</Button>
        </div>
      </div>
    </div>
  );
};
