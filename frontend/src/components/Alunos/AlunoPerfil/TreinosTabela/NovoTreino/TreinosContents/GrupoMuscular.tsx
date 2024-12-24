import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select as ShadSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import Select from "react-select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { TableCell } from "@/components/ui/table";
import { allexercicios, gruposMusculares, setstype } from "../../AbasTreinos";
import { input, z } from "zod";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { novoTreinoSchema } from "../NovoTreino";
import { treinos_letra } from "./TreinoA";

type TypeGrupoMuscular = {
  exercicios: allexercicios[];
  grupos_musculares: gruposMusculares[];
  formControl: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
  field: FieldArrayWithId<z.infer<typeof novoTreinoSchema>>;
  index: number;
  treino_dia: treinos_letra;
  sets: setstype[] | undefined;
};

const GrupoMuscular = ({
  index,
  formControl,
  field,
  exercicios,
  grupos_musculares,
  treino_dia,
  sets,
}: TypeGrupoMuscular) => {
  type inputValue = {
    value: string;
    label: string;
  };

  return (
    <>
      <TableCell className="w-full ">
        <FormField
          control={formControl.control}
          name={`${treino_dia}.${index}.exercise_id`}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        `w-[150px] md:w-[50%]  justify-between text-xs md:text-[1em] overflow-hidden `,
                        !field.value && "text-muted-foreground  w-[150px]"
                      )}
                    >
                      {field.value
                        ? exercicios.find(
                            (language) => language.id.toString() === field.value
                          )?.nome_exercicio
                        : ""}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Procurar exercicio" />
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {exercicios.map((language) => (
                          <CommandItem
                            value={language.nome_exercicio}
                            key={language.id}
                            onSelect={() => {
                              formControl.setValue(
                                `${treino_dia}.${index}.exercise_id`,
                                language.id.toString()
                              ); // se pa aqui vai te q mudar e colocar index
                            }}
                          >
                            {language.nome_exercicio}
                            <Check
                              className={cn(
                                "w-full ml-auto ",
                                language.id.toString() === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
      </TableCell>
      <TableCell className="w-full">
        <FormField
          control={formControl.control}
          name={`${treino_dia}.${index}.set_id`}
          render={({ field }) => (
            <FormItem>
              <ShadSelect
                onValueChange={field.onChange}
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger className="w-[100px] ">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sets &&
                    sets.map((set) => {
                      return (
                        <SelectItem value={set.id.toString()}>
                          {set.sets}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </ShadSelect>

              <FormMessage />
            </FormItem>
          )}
        />
      </TableCell>
    </>
  );
};

export default GrupoMuscular;
