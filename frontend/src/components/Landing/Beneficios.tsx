import React from "react";
import { ContainerLanding } from "./ContainerLanding";
import { BeneficiosItems } from "./BeneficiosItems";

const beneficiosOptions = [
  {
    titulo: "Gestão Simplificada",
    texto: "Tudo organizado em um só lugar.",
  },
  {
    titulo: "Treinos Personalizados",
    texto: "Planos sob medida para seus alunos.",
  },

  {
    titulo: "Equipe Conectada",
    texto: "Professores e gestores trabalhando juntos.",
  },
  {
    titulo: "Relatórios Inteligentes",
    texto: "Dados claros para decisões melhores.",
  },
  {
    titulo: "Plataforma Intuitiva",
    texto: "Fácil de usar, fácil de crescer.",
  },

  {
    titulo: "Suporte Confiável",
    texto: "Estamos aqui para ajudar você.",
  },
  {
    titulo: "Treinos Personalizados",
    texto: "Planos sob medida para seus alunos.",
  },
  {
    titulo: "Relatórios Inteligentes",
    texto: "Dados claros para decisões melhores.",
  },
];

export const Beneficios = () => {
  return (
    <div className="h-auto md:h-screen flex justify-center items-center py-16">
      <ContainerLanding>
        <div className="text-center">
          <span className="text-blue-700 font-bold uppercase rounded-3xl">
            Beneficios
          </span>
          <h1 className="text-gray-800 md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold py-2">
            Benefícios que fazem a diferença
          </h1>
          <h3 className="md:w-2/4 m-auto  text-slate-400">
            Na FitPlan, reunimos as melhores soluções para que você dedique mais
            tempo ao que realmente importa: os resultados dos seus alunos.
          </h3>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-12 gap-5 ">
          {beneficiosOptions.map((beneficio) => {
            return <BeneficiosItems beneficio={beneficio} />;
          })}
        </div>
      </ContainerLanding>
    </div>
  );
};
