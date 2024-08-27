import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { typeForm } from "@/types/types";

export const Form3 = ({ form }: typeForm) => {
  return (
    <>
      <div className="col-span-12">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Endereço</FormLabel>
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
          name="numero"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Numero</FormLabel>
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
          name="bairro"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Bairro</FormLabel>
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
          name="city"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs">Cidade</FormLabel>
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
