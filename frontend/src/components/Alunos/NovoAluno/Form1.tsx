import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { typeForm } from "@/types/types";

export const formatCpfCnpj = (value: string) => {
  const cleanedValue = value.replace(/\D/g, ""); // remove caracteres não numéricos

  if (cleanedValue.length <= 11) {
    // CPF
    return cleanedValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  } else {
    // CNPJ
    return cleanedValue
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
};

export const Form1 = ({ form }: typeForm) => {
  return (
    <>
      <div className="col-span-12">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Nome Completo</FormLabel>
                <FormControl>
                  <Input {...field} className=" mt-0" />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            );
          }}
        />
      </div>

      <div className="col-span-12">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Email*</FormLabel>
                <FormControl>
                  <Input {...field} className=" m-0" />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            );
          }}
        />
      </div>

      <div className="col-span-12">
        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Sexo*</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className=" m-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Homem</SelectItem>
                      <SelectItem value="dark">Mulher</SelectItem>
                      <SelectItem value="system">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            );
          }}
        />
      </div>

      <div className="col-span-12">
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">CPF*</FormLabel>
                <FormControl>
                  <Input {...field} className=" m-0" />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            );
          }}
        />
      </div>

      <div className="col-span-12">
        <FormField
          control={form.control}
          name="rg"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">RG*</FormLabel>
                <FormControl>
                  <Input {...field} className=" m-0" />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            );
          }}
        />
      </div>
    </>
  );
};
