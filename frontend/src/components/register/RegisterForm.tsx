import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { RegisterHeader } from "./RegisterHeader";

export const RegisterForm = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextStep = () => {
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 3000);
  };

  return (
    <form className=" h-72 flex justify-center pt-12  2xl:w-2/5 xl:w-3/5 flex-col  ">
      {currentIndex === 1 && (
        <div>
          <div className="mb-10 ">
            <RegisterHeader
              header="Cadastre sua academia!"
              text="Você está a um clique de revolucionar a gestão da sua academia."
            />
          </div>

          <div>
            <div className="xl:w-2/4 w-4/5   m-auto">
              <>
                <div className="mb-4">
                  <Input
                    placeholder="Nome Completo"
                    className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                  />

                  {/* <span className="text-sm text-red-500 font-semibold bg-white rounded-sm ">
                  Nome deve ser maior que 10 caractéres.
                </span> */}
                </div>

                <div className="mb-4">
                  <Input
                    placeholder="E-mail"
                    className="bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Senha para entrar no sistema"
                    type="password"
                    className="bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                  />
                </div>
                <div className="text-center pt-7">
                  <Button variant="secondary" onClick={nextStep} type="button">
                    Cadastrar
                  </Button>
                </div>
              </>
            </div>
          </div>
        </div>
      )}

      {currentIndex === 2 && (
        <div>
          <div className="mb-10 ">
            <RegisterHeader
              header="Seja bem vindo, Name! 😄"
              text="Estamos quase lá! Apenas falta colocar algumas informações!"
            />
          </div>
          <div>
            <div className="xl:w-2/4  w-4/5  m-auto">
              <>
                <div className="">
                  <Input
                    placeholder="Nome da Academia"
                    className=" bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                  />
                </div>

                <div className="my-4">
                  <Input
                    placeholder="Telefone"
                    className="bg-transparent placeholder:text-white text-white focus-visible:outline-none mb-2"
                  />
                </div>

                <div className="text-center pt-7">
                  <Button variant="secondary" type="button">
                    Concluir
                  </Button>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};
