import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Inputs } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  return (
    <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <Label className="text-gray-500 text-sm ">Endereço de email</Label>
        <Input
          className="mt-2"
          type="text"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm font-semibold">
            Por favor, insira um email válido.
          </span>
        )}
      </div>

      <div className="mb-2">
        <Label className="text-gray-500 text-sm ">Senha</Label>
        <Input
          type="password"
          className="mt-2"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm font-semibold">
            Por favor, insira uma senha válida.
          </span>
        )}
      </div>

      <div className="">
        <span className="text-gray-500 text-sm cursor-pointer hover:text-gray-800">
          Esqueceu sua senha?
        </span>
      </div>

      <div className="mt-8">
        <Button className="w-full" type="submit">
          Entrar
        </Button>
      </div>

      <div className="text-gray-500 text-sm text-center pt-4">
        <h1>Ainda não cadastrou sua academia?</h1>
        <Link
          to={"/register"}
          className="text-blue-700 font-semibold cursor-pointer"
        >
          Cadastre-se de graça!
        </Link>
      </div>
    </form>
  );
};
