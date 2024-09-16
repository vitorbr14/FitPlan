import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import NovoTreinoObjetivo from "./NovoTreinoCampos.tsx/NovoTreinoObjetivo";
import { NovoTreinoFrequencia } from "./NovoTreinoCampos.tsx/NovoTreinoFrequencia";
import { NovoTreinoData } from "./NovoTreinoCampos.tsx/NovoTreinoData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useEffect, useState } from "react";
import { TreinoA } from "./NovoTreinoCampos.tsx/Treinos/TreinoA";
import { TreinoB } from "./NovoTreinoCampos.tsx/Treinos/TreinoB";
import { AddExercicioBtn } from "./AddExercicioBtn";
import { TreinoC } from "./NovoTreinoCampos.tsx/Treinos/TreinoC";

const exercisesSchema = z.object({
  exercise_name: z.string(),
  sets: z.string().min(1, "Por favor, insira o número de séries."),
  reps: z.string().min(1, "Por favor, insira o número de repetições."),
  rest: z.string().min(1, "Por favor, insira o tempo de descanso."),
  muscle_group: z.string().min(1, "Por favor, insira o grupo muscular."),
  workout_group: z.string().min(1, "Por favor, insira o grupo de treino."),
});

export const novoTreinoSchema = z.object({
  objetivo: z.enum(["1", "2", "3", "4"], {
    required_error: "Por favor, escolha um objetivo.",
  }),
  frequencia: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Por favor, escolha uma frequência.",
  }),
  inicio: z.date({ required_error: "Por favor, insira uma data de início." }),
  vencimento: z.date().optional(),
  professor: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Por favor, escolha uma frequência.",
  }),
  workout: z.object({
    treino_a: z.array(exercisesSchema),
    treino_b: z.array(exercisesSchema).optional(),
    treino_c: z.array(exercisesSchema).optional(),
  }),
});

const treinos = [
  { value: "treino_a", label: "TREINO A" },
  { value: "treino_b", label: "TREINO B" },
  { value: "treino_c", label: "TREINO C" },
  { value: "treino_d", label: "TREINO D" },
  { value: "treino_e", label: "TREINO E" },
];

const renderTabs = (count: number) => {
  return treinos.slice(0, count + 1).map((treino, index) => (
    <TabsTrigger key={index} value={treino.value}>
      {treino.label}
    </TabsTrigger>
  ));
};

export const NovoTreino = () => {
  function onSubmit(values: z.infer<typeof novoTreinoSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof novoTreinoSchema>>({
    resolver: zodResolver(novoTreinoSchema),
    defaultValues: {
      objetivo: "1",
      frequencia: "1",
      workout: {},
    },
  });

  const {
    append: append_a,
    fields: fields_a,
    remove: remove_a,
  } = useFieldArray({
    name: "workout.treino_a",
    control: form.control,
  });

  const {
    fields: fields_b,
    append: append_b,
    remove: remove_b,
  } = useFieldArray<z.infer<typeof novoTreinoSchema>>({
    name: "workout.treino_b",
    control: form.control,
  });

  const {
    fields: fields_c,
    append: append_c,
    remove: remove_c,
  } = useFieldArray<z.infer<typeof novoTreinoSchema>>({
    name: "workout.treino_c",
    control: form.control,
  });

  const [tab, setTab] = useState("treino_a");

  const frequencia = form.watch("frequencia");

  useEffect(() => {
    setTab("treino_a");
  }, [form.watch("frequencia")]);
  return (
    <div>
      <div className="flex gap-3 items-center py-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span className="font-semibold text-xl">John Doe</span>
          <span className="text-sm text-gray-500 font-normal">
            johndoe@mail.com
          </span>
        </div>
      </div>
      <div className="pb-4">
        <Separator />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <NovoTreinoObjetivo control={form.control} />
            </div>
            <div className="col-span-3">
              <NovoTreinoFrequencia form={form} />
            </div>

            <div className="col-span-3">
              <NovoTreinoData
                control={form.control}
                formName="inicio"
                form={form}
              />
            </div>
            <div className="col-span-3">
              <NovoTreinoData
                control={form.control}
                formName="vencimento"
                form={form}
              />
            </div>
          </div>

          <div>
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList>{renderTabs(Number(frequencia))}</TabsList>
              <div></div>

              <TabsContent value="treino_a">
                <TreinoA
                  fields={fields_a}
                  form={form}
                  append={append_a}
                  remove={remove_a}
                />
              </TabsContent>
              <TabsContent value="treino_b">
                <TreinoB
                  fields={fields_b}
                  form={form}
                  append={append_b}
                  remove={remove_b}
                />
              </TabsContent>
              <TabsContent value="treino_c">
                <TreinoC
                  fields={fields_c}
                  form={form}
                  append={append_c}
                  remove={remove_c}
                />
              </TabsContent>
            </Tabs>
          </div>

          <Button type="submit">Enviar Treino</Button>
        </form>
      </Form>
    </div>
  );
};
