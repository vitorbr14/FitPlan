import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { formSchema } from "@/types/types";
import { Form3 } from "./Form3";
import { Form4 } from "./Form4";
import { Form5 } from "./Form5";

export const NovoAlunoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
    mode: "onChange",
  });

  const [currentIndex, setCurrentIndex] = useState(1);
  const [formProgress, setFormProgress] = useState(20);

  const stepsOptions = [
    {
      fields: ["fullname", "firstName", "email", "sex", "cpf", "rg"],
    },
    {
      fields: ["birth", "marital", "phone1"],
    },

    {
      fields: ["address", "numero", "bairro", "city"],
    },
    {
      fields: ["matricula"],
    },
    {
      label: "Step 5",
      info: "Complete",
    },
  ];

  const nextStep = async () => {
    const fields = stepsOptions[currentIndex - 1].fields;

    const output = await form.trigger(fields as any, { shouldFocus: true });
    if (!output) return;
    if (currentIndex >= stepsOptions.length) return;

    setFormProgress(formProgress + 20);
    setCurrentIndex(currentIndex + 1);
  };

  const backStep = () => {
    if (currentIndex <= 1) return;

    setFormProgress(formProgress - 20);
    setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="">
      <div>
        <div className="text-xl">Cadastrar novo aluno</div>
        <div className="py-6">
          <Progress value={formProgress} />
        </div>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="grid grid-cols-12 gap-1  h-auto  items-center">
                {currentIndex === 1 && <Form1 form={form} />}

                {currentIndex === 2 && <Form2 form={form} />}
                {currentIndex === 3 && <Form3 form={form} />}
                {currentIndex === 4 && <Form4 form={form} />}
                {currentIndex === 5 && <Form5 form={form} />}
              </div>

              <div className="py-4">
                {currentIndex === 5 ? (
                  <Button
                    type="button"
                    onClick={() => form.handleSubmit(handleSubmit)()}
                  >
                    Enviar
                  </Button>
                ) : (
                  <Button className="mr-2" onClick={nextStep} type="button">
                    Avançar
                  </Button>
                )}

                <Button className="mr-2" onClick={backStep} type="button">
                  Voltar
                </Button>
              </div>
            </form>
            <div className="flex gap-2 pt-7"></div>
          </Form>
        </div>
      </div>
    </div>
  );
};
