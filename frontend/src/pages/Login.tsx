import React from "react";
import { LoginNavbar } from "../components/Login/LoginNavbar";
import { LoginForm } from "@/components/Login/LoginForm";

export const Login = () => {
  return (
    <div className="h-screen w-full grid grid-cols-12">
      <div className="bg-blue-700 md:col-span-7 md:block hidden">
        <div className="p-7">
          <LoginNavbar />
        </div>

        <div className="text-white text-3xl 2xl:pt-52 2xl:px-8  2xl:text-5xl xl:pt-10 xl:text-5xl xl:px-6 xl:w-11/12">
          <h1>Qualquer hora, qualquer lugar...</h1>
          <h1>
            Controle <span className="font-bold ">sua academia!</span>
          </h1>
        </div>
      </div>
      <div className="bg-white md:col-span-5 col-span-12">
        <div className="h-full flex justify-center items-center ">
          <div className=" xl:w-8/12 2xl:w-7/12 w-10/12">
            <h1 className="text-2xl font-bold">Entrar</h1>
            <span className="text-gray-600 text-sm">
              Se você já é um membro, pode entrar com seu endereço de e-mail e
              senha.
            </span>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
