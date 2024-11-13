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

export const createUserSchema = z.object({
  email: z.string().email(),
  nome: z.string(),
  role_id: z.number(),
});

export const novoUserInfos = z.object({
  cidade: z.string(),
  rua: z.string(),
  bairro: z.string(),
  aluno_id: z.number(),
});

export const novoAlunoContatos = z.object({
  contato: z.object({
    telefone: z.string().min(8),
    iswapp: z.boolean().default(true).optional(),
    aluno_id: z.number(),
  }),
  endereco: z.object({
    cidade: z.string().min(4),
    rua: z.string().min(4),
    bairro: z.string().min(4),
    aluno_id: z.number(),
  }),
});

export type planosType = {
  id: number;
  plano: string;
  plano_price: string;
};

type Plano = {
  id: number;
  plano: string;
  plano_price: string;
};

export type Matricula = {
  id: number;
  aluno_id: number;
  academia_id: number;
  plano_id: number;
  inicio: string; // ou Date, se preferir trabalhar com objetos de data
  status: boolean;
  plano: Plano;
};

export type Cobrancas = {
  id: number;
  data: string;
  data_vencimento: string;
  matricula_id: number;
  status: "PAGO" | "ABERTA" | "VENCIDA";
  preco: Number;
};

export type FetchCobrancaResponse = {
  findAllCobrancas: Cobrancas[];
  paginas: number;
};

export type ProfessorType = {
  id: string;
  nome: string;
  email: string;
  role_id: number;
  academia_id: number;
};

export type AlunoType = {
  email: string;
  id: number;
  nome: string;
  role_id: number;
  academia_id: number;
  estado_civil_id: number | null; // Pode ser null
  sexo_id: number | null; // Pode ser null
};

export type FetchDataResponse = {
  alunos: ProfessorType[] | AlunoType[];
  paginas: number;
};

export const novo_professor_type = z
  .object({
    nome: z.string().min(2, {
      message: "Nome deve ter pelomenos 4 letras.",
    }),
    email: z.string().email().min(5, {
      message: "Insira um email.",
    }),
    password: z.string().min(6).max(50),
    confirmPassword: z.string().min(6).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dont confirm",
    path: ["confirmPassword"],
  });

export const novo_aluno_type = z.object({
  nome: z.string().min(2, {
    message: "Nome deve ter pelomenos 4 letras.",
  }),
  email: z.string().email().min(5, {
    message: "Insira um email.",
  }),
});
