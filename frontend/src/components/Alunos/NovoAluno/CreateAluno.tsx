import { createUserSchema } from "@/types/types";
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
import { Input } from "@/components/ui/input";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

type TypeCreateUser = {
  form: UseFormReturn<z.infer<typeof createUserSchema>>;
};

export const CreateAluno = ({ form }: TypeCreateUser) => {
  return (
    <>
      <div className="col-span-12 py-2">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-12  py-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};
