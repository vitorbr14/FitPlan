import { UseFormRegister, FieldErrors } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  fullname: z
    .string({ required_error: "Campo obrigatório." })
    .min(5, "Este campo deve ter pelo menos 5 caracteres."),

  email: z
    .string({ required_error: "Campo obrigatório." })
    .email("Formato de e-mail inválido."),
  sex: z.string({ required_error: "Campo obrigatório." }).min(3),
  cpf: z
    .string({
      required_error: "CPF/CNPJ é obrigatório.",
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length >= 11;
    }, "CPF deve conter no mínimo 11 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length <= 14;
    }, "CPF deve conter no máximo 11 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return !!Number(replacedDoc);
    }, "CPF deve conter apenas números."),
  rg: z
    .string({
      required_error: "RG é obrigatório.",
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length <= 14;
    }, "RG deve conter no máximo 9 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length >= 11;
    }, "RG deve conter no mínimo 9 caracteres.")

    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return !!Number(replacedDoc);
    }, "CPF/CNPJ deve conter apenas números."),
  birth: z.string({ required_error: "Campo obrigatório." }).min(3),
  marital: z.string({ required_error: "Campo obrigatório." }).min(3),
  phone1: z.string({ required_error: "Campo obrigatório." }).min(3),
  address: z.string({ required_error: "Campo obrigatório." }).min(3),
  numero: z.string({ required_error: "Campo obrigatório." }).min(3),
  bairro: z.string({ required_error: "Campo obrigatório." }).min(3),
  city: z.string({ required_error: "Campo obrigatório." }).min(3),
  matricula: z.string({ required_error: "Campo obrigatório." }),
});

export type typeForm = {
  form: any;
};
