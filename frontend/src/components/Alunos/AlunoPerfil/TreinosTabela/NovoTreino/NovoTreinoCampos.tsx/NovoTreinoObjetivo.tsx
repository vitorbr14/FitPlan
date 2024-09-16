import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Control, FieldValues } from "react-hook-form";
const objetivos = [
  {
    id: "1",
    objetivo: "Hipertrofia",
  },
  {
    id: "2",
    objetivo: "Emagrecimento",
  },
  {
    id: "3",
    objetivo: "Condicionamento Físico",
  },

  {
    id: "4",
    objetivo: "Reabilitação",
  },
];

type TypeNovoTreinoObjetivo = {
  control: any;
};
const NovoTreinoObjetivo = ({ control }: TypeNovoTreinoObjetivo) => {
  return (
    <FormField
      control={control}
      name="objetivo"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Objetivo</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {objetivos.map((obj) => {
                return <SelectItem value={obj.id}>{obj.objetivo}</SelectItem>;
              })}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default NovoTreinoObjetivo;
