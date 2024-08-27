import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { typeForm } from "@/types/types";

export const Form4 = ({ form }: typeForm) => {
  return (
    <>
      <div className="col-span-12">
        <FormField
          control={form.control}
          name="matricula"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Tipo de Matricula</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={form.watch("matricula")}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="1" />
                    </FormControl>
                    <FormLabel className="font-normal">Mensal</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="2" />
                    </FormControl>
                    <FormLabel className="font-normal">Semestral</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="3" />
                    </FormControl>
                    <FormLabel className="font-normal">Anual</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <h1 className="text-xl pb-4">
            Data de vencimento:
            {form.getValues("matricula") === "1" && "Daqui a 1 mês"}
            {form.getValues("matricula") === "2" && "Daqui a 6 meses"}
            {form.getValues("matricula") === "3" && "Daqui 1 ano"}
          </h1>
        </div>
      </div>
    </>
  );
};
