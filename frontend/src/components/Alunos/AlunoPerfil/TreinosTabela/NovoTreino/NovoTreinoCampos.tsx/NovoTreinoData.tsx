import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Control, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { novoTreinoSchema } from "../NovoTreino";

type TypeNovoTreinoData = {
  control: Control<z.infer<typeof novoTreinoSchema>>;
  formName: string;
  form: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
};
export const NovoTreinoData = ({
  control,
  formName,
  form,
}: TypeNovoTreinoData) => {
  return (
    <div className="pt-[10px]">
      <FormField
        control={form.control}
        name={formName as keyof z.infer<typeof novoTreinoSchema>}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>
              {formName === "vencimento" ? "Vencimento (opicional)" : "Inicio "}
            </FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      " pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value instanceof Date ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Escolha uma data</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={
                    field.value instanceof Date ? field.value : undefined
                  }
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
