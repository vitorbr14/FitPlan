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

export const Form2 = ({ form }: typeForm) => {
  return (
    <>
      <div className="col-span-12">
        <FormField
          control={form.control}
          name="birth"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Data de Nascimento*</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className=" m-0"
                    type="date"
                    placeholder=""
                  />
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
          name="marital"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Estado Civil*</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className=" m-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Casado</SelectItem>
                      <SelectItem value="dark">Solteiro</SelectItem>
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
          name="phone1"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Telefone</FormLabel>
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
