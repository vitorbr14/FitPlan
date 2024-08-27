import { typeForm } from "@/types/types";

export const Form5 = ({ form }: typeForm) => {
  return (
    <>
      <div className="col-span-12">
        <h1 className="text-xl">Nome: {form.getValues("fullname")}</h1>
        <h1 className="text-xl">
          Tipo de Matricula: {form.getValues("matricula")}
        </h1>
      </div>
    </>
  );
};
