import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { planoSchema } from "../MatriculaTabela";

type TypeMatriculaPagamento = {
  form: UseFormReturn<z.infer<typeof planoSchema>>;
};
export function MatriculaPagamento({ form }: TypeMatriculaPagamento) {
  const [date, setDate] = React.useState<Date>();

  return (
    <div>
      <div>
        <div className="flex items-center">
          <FormField
            control={form.control}
            name="inicio_matricula"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex w-[25em] items-center justify-between ">
                  <FormLabel>Começo da matrícula</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? dayjs(field.value).format("DD/MM/YYYY")
                            : dayjs(field.value).format("DD/MM/YYYY")}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="mt-4 pb-4">
        <div className=" flex w-[25em] items-center justify-between">
          <span className="text-sm font-medium">Proxima Cobrança:</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                {/* {form.getValues("plano_option") === "plano_1" &&
                  dayjs(getValues("inicio_matricula"))
                    .add(1, "month")
                    .format("DD/MM/YYYY")}
                {getValues("plano_option") === "plano_2" &&
                  dayjs(getValues("inicio_matricula"))
                    .add(6, "months")
                    .format("DD/MM/YYYY")}
                {getValues("plano_option") === "plano_3" &&
                  dayjs(getValues("inicio_matricula"))
                    .add(1, "year")
                    .format("DD/MM/YYYY")}

                {getValues("plano") === undefined && "Próxima Cobrança"} */}

                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
