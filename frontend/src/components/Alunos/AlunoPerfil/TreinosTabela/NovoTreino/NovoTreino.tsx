import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { AbasTreinos } from "../AbasTreinos";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { gruposMusculares } from "@/utils/gruposMusculares";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadingSpinner } from "@/components/ui/loading";
import Cookies from "js-cookie";
import useCheckMatricula from "@/components/hooks/useCheckMatricula";

const exercisesSchema = z.object({
  dia_id: z.string(),
  set_id: z.string(),
  exercise_id: z.string(),
});

export const novoTreinoSchema = z.object({
  frequencia_id: z.string({ required_error: "Selecione uma frequencia." }),
  objetivo_id: z.string({ required_error: "Selecione um objetivo" }),
  inicio_treino: z.date({ required_error: "Insira a data de inicio." }),
  vencimento_treino: z.date().optional(),
  exercicios: z.array(exercisesSchema),
  exerciciosB: z.array(exercisesSchema),
  exerciciosC: z.array(exercisesSchema).optional(),
});

export const NovoTreino = () => {
  const { isAlunoMatriculado } = useCheckMatricula("11");

  const queryClient = useQueryClient();

  // Requests
  const { data: objetivos } = useQuery({
    queryKey: ["objetivos"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}treino/objetivos`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }).then((res) => res.json()),
  });

  const { data: freq } = useQuery({
    queryKey: ["frequencia"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}treino/frequencia`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }).then((res) => res.json()),
  });

  type data_obj_api = {
    data: obj_api;
  };

  type obj_api = {
    aluno_id: number;
    frequencia_id: number;
    objetivo_id: number;
    inicio_treino: Date;
    vencimento_treino: Date | undefined;
    exercicios: exercisesType[];
  };

  // ? MUTATION PARA ADICIONAR NOVO TREINO

  const { mutate: new_treino, isPending } = useMutation({
    mutationFn: (data: data_obj_api) => {
      return axios.post(`${import.meta.env.VITE_API_URL}treino`, data, {
        headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["treinos"] });
      toast.success("Treino criado com sucesso!");
    },
    onError: () => {
      toast.error("Algo deu errado, tente novamente.");
    },
  });

  type exercisesType = {
    dia_id: number;
    set_id: number;
    exercise_id: number;
  };

  const transformArrayIntoNumber = (
    array: Array<{ dia_id: string; set_id: string; exercise_id: string }>
  ) => {
    const mapped = array.map((item) => ({
      dia_id: Number(item.dia_id),
      set_id: Number(item.set_id),
      exercise_id: Number(item.exercise_id),
    }));

    return mapped;
  };

  let { id: id_aluno_url } = useParams();
  function onSubmit(values: z.infer<typeof novoTreinoSchema>) {
    // Esse é o objeto modificado para mandar para API.

    const mergedArrays = [
      ...values.exercicios,
      ...values.exerciciosB,
      ...(values.exerciciosC ?? []),
    ];

    transformArrayIntoNumber(mergedArrays);
    const obj_api: data_obj_api = {
      data: {
        aluno_id: Number(id_aluno_url),
        frequencia_id: Number(values.frequencia_id),
        objetivo_id: Number(values.objetivo_id),
        inicio_treino: values.inicio_treino,
        vencimento_treino: undefined,
        exercicios: transformArrayIntoNumber(mergedArrays),
      },
    };

    new_treino(obj_api);
    console.log(obj_api.data.exercicios);
  }
  type objType = {
    id: string;
    objetivo: string;
  };
  type freqType = {
    id: string;
    frequencia: string;
  };
  const form = useForm<z.infer<typeof novoTreinoSchema>>({
    resolver: zodResolver(novoTreinoSchema),
  });

  return (
    <div>
      <div className="absolute left-[100]"></div>
      <h1 className="pb-3">Novo Treino</h1>
      <div className="pb-4">
        <Separator />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="objetivo_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Objetivo</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {objetivos &&
                          objetivos.map((obj: objType) => {
                            return (
                              // Bug no shadcn, tem que converter para string para aparecer o value https://github.com/shadcn-ui/ui/issues/1361
                              <SelectItem value={obj.id.toString()}>
                                {obj.objetivo}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-3">
              <FormField
                control={form.control}
                name="frequencia_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frequencia</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={form.watch("frequencia_id")}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {freq &&
                          freq.map((freq: freqType) => {
                            return (
                              <SelectItem value={freq.id.toString()}>
                                {freq.frequencia}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-3">
              <div className="mt-2">
                <FormField
                  control={form.control}
                  name="inicio_treino"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Inicio</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "",
                                !field.value && "text-muted-foreground z-50"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : ""}
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
            <div className="col-span-3">
              <div className="mt-2">
                <FormField
                  control={form.control}
                  name="vencimento_treino"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Vencimento</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : ""}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className=" p-0" align="start">
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
          <AbasTreinos formControl={form} freq={freq} />
          <Button type="submit" disabled={isPending}>
            {isPending ? <LoadingSpinner /> : "Enviar"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
