import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormReturn,
} from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { novoTreinoSchema } from "../../NovoTreino";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddExercicioBtn } from "../../AddExercicioBtn";
import { gruposMusculares } from "@/utils/gruposMusculares";
import { TableTreinos } from "./TableTreinos";
type TypeTreinoB = {
  form: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
  fields: FieldArrayWithId<
    z.infer<typeof novoTreinoSchema>,
    "workout.treino_c",
    "id"
  >[];
  append: UseFieldArrayAppend<
    z.infer<typeof novoTreinoSchema>,
    "workout.treino_c"
  >;
  remove: UseFieldArrayRemove;
};
export const TreinoC = ({ fields, form, append, remove }: TypeTreinoB) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full">
          <AddExercicioBtn />
        </DialogTrigger>
        <DialogContent className="max-w-5xl">
          <div className="grid grid-cols-12 gap-3">
            {fields.map((field, index) => {
              return (
                <React.Fragment key={field.id}>
                  <div className="col-span-3">
                    <FormField
                      control={form.control}
                      name={`workout.treino_c.${index}.muscle_group`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grupo Muscular</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione um grupo muscular" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {gruposMusculares.map((grupo) => {
                                return (
                                  <SelectItem
                                    key={grupo.grupo}
                                    value={grupo.grupo}
                                  >
                                    {grupo.grupo}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-3">
                    <FormField
                      control={form.control}
                      name={`workout.treino_c.${index}.exercise_name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Exercicio</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name={`workout.treino_c.${index}.sets`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sets</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name={`workout.treino_c.${index}.reps`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Repetições</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name={`workout.treino_c.${index}.rest`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descanso</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name={`workout.treino_c.${index}.workout_group`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Treino</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-1">
                    {index === 0 ? (
                      <Button className="mt-[2.3em]" disabled>
                        Excluir
                      </Button>
                    ) : (
                      <Button
                        className="mt-[2.3em]"
                        onClick={() => remove(index)}
                      >
                        Excluir
                      </Button>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <Button
            onClick={() =>
              append({
                exercise_name: "",
                sets: "",
                reps: "",
                rest: "",
                muscle_group: "",
                workout_group: "treino_c",
              })
            }
          >
            Adicionar Exercício
          </Button>
        </DialogContent>
      </Dialog>
      <TableTreinos fields={fields} form={form} />
    </>
  );
};
