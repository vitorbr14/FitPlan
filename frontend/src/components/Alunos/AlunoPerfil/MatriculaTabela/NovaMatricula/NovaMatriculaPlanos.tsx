import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { planoSchema } from "../MatriculaTabela";
const planos = [
  {
    id: 1,
    label: "Mensal",
    texto: "Pagamento mensal",
    preco: 80.0,
    value: "plano_1",
  },
  {
    id: 2,
    label: "Semestral",
    texto: "Pagamento semestral",
    preco: 450.0,
    value: "plano_2",
  },
  {
    id: 3,
    label: "Anual",
    texto: "Pagamento anual",
    preco: 800.0,
    value: "plano_3",
  },
];

type TypePropsNovaMatriculaPlanos = {
  form: UseFormReturn<z.infer<typeof planoSchema>>;
};
export const NovaMatriculaPlanos = ({ form }: TypePropsNovaMatriculaPlanos) => {
  return (
    <FormField
      control={form.control}
      name="plano"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Escolha um plano para o aluno.</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex justify-between"
              value={form.watch("plano")}
            >
              {planos.map((plano) => {
                return (
                  <div className=" items-center space-x-2" key={plano.id}>
                    <div className="border w-44 h-24 rounded-sm  checked:bg-yellow-300 ">
                      <div className=" p-3">
                        <div className="flex justify-between items-center ">
                          <div className="flex flex-col">
                            <span className="text-sm">{plano.label}</span>
                            <span className="text-xs text-gray-500 italic">
                              {plano.texto}
                            </span>
                          </div>
                          <div>
                            <FormItem>
                              <FormControl>
                                <RadioGroupItem value={plano.value} />
                              </FormControl>
                            </FormItem>
                          </div>
                        </div>
                        <div className="mt-3 font-bold">
                          <h1>R$ {plano.preco}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
