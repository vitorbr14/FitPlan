import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import { Calendar } from "@/components/ui/calendar";

import { Input } from "@/components/ui/input";
import { switchCasePlanos } from "@/utils/switchCasePlanos";
import { UseFormReturn } from "react-hook-form";
import { cobrancaSchema } from "../AlunoPerfilFinanceiroTable";
type TypeNovaCobrança = {
  form: UseFormReturn<z.infer<typeof cobrancaSchema>>;
};
export const NovaCobrança = ({ form }: TypeNovaCobrança) => {
  return (
    <div>
      <div className="flex gap-2 flex-col">
        <h1 className="text-3xl font-semibold">Nova Cobrança</h1>
        <h3 className="text-base text-gray-600">John Doe Da Silva</h3>
      </div>

      <div className="py-5">
        <div className="flex items-center gap-2 ">
          <div className="w-full">
            <FormField
              control={form.control}
              name="plano_option"
              render={({ field }) => (
                <FormItem>
                  <div className="">
                    <FormLabel>Plano:</FormLabel>
                    <div className="">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={form.watch("plano_option")}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o plano" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="teste" disabled>
                            Selecione um plano...
                          </SelectItem>
                          <SelectItem value="plano_1">Mensal - 50$</SelectItem>
                          <SelectItem value="plano_2">
                            Semestral - 400$
                          </SelectItem>
                          <SelectItem value="plano_3">Anual - 600$</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      <div className="pb-2">
        <div className="flex items-center gap-2 ">
          <div className="w-full">
            <FormField
              control={form.control}
              name="plano_inicio"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Inicio da cobrança:</FormLabel>
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

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      <div className="pb-4">
        <div className="flex items-center gap-2 ">
          <div className="w-full">
            <span className="text-sm font-medium">Data vencimento</span>
            <Input
              className="opacity-0"
              disabled
              value={
                switchCasePlanos(
                  dayjs(form.watch("plano_inicio")),
                  form.getValues("plano_option")
                ) || "Vencimento"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
