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

import { Matricula } from "@/types/types";
import { formatarData } from "@/utils/formatDate";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type TypeNovaCobrança = {
  form: UseFormReturn<z.infer<typeof cobrancaSchema>>;
  matricula_aluno: Matricula;
};
export const NovaCobrança = ({ form, matricula_aluno }: TypeNovaCobrança) => {
  return (
    <div>
      <div className="flex gap-2 flex-col">
        <h1 className="text-3xl font-semibold">Nova Cobrança</h1>
        <h3 className="text-base text-gray-600">John Doe Da Silva</h3>
      </div>

      <div className="py-5">
        <div className="flex items-center gap-2 ">
          <div className="w-full">
            <Input
              disabled
              placeholder={`${matricula_aluno.plano.plano} - ${matricula_aluno.plano.plano_price} R$`}
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
                  <FormLabel>Data da Cobrança:</FormLabel>
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
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Status da Cobrança:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="PAGO" />
                        </FormControl>
                        <FormLabel className="font-normal">Paga</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="ABERTA" defaultChecked />
                        </FormControl>
                        <FormLabel className="font-normal">Em Aberto</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="VENCIDA" />
                        </FormControl>
                        <FormLabel className="font-normal">Vencida</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
