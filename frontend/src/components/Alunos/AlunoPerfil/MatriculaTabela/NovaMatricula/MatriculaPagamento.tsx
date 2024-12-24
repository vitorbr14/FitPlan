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
  return (
    <div>
      <div>
        <div className="flex items-center">
          <FormField
            control={form.control}
            name="inicio_matricula"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex w-[25em] flex-col md:flex-row md:items-center md:justify-between ">
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
    </div>
  );
}
