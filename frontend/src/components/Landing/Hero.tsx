import React from "react";
import heroimg from "../../assets/hero_img.png";
import { url } from "inspector";
import { Button } from "../ui/button";
import { ContainerLanding } from "./ContainerLanding";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className=" h-screen bg_pattern  flex items-center justify-center">
      <ContainerLanding>
        <div className="grid grid-cols-12  ">
          <div className="md:col-span-6 col-span-12 flex items-center  ">
            <div>
              <h1 className=" text-gray-800 font-semibold  text-4xl md:text-3xl lg:text-5xl 2xl:text-7xl ">
                Transforme a gestão da sua{" "}
                <span className="text-blue-700 font-bold">academia</span>.
              </h1>
              <h3 className=" font-normal  mt-5 pb-2 text-slate-600  text-sm lg:text-lg ">
                FitPlan ajuda você a gerenciar alunos, professores, cobranças e
                treinos de forma prática e eficiente.
              </h3>

              <Link to={"/login"}>
                <Button>Entrar</Button>
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 col-span-12">
            <img
              src={heroimg}
              alt="Hero"
              className="w-full object-contain hidden md:block" // Mantém a proporção da imagem
            />
          </div>
        </div>
      </ContainerLanding>
    </div>
  );
};
