import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoadingSpinner } from "../ui/loading";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
const loginSchema = z.object({
  email: z.string({ required_error: "Insira um e-mail válido." }),
  password: z.string({ required_error: "Insira uma senha." }).min(4),
});
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const LoginForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      setLoading(true);
      const loggedUser = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const token = await loggedUser.user.getIdToken();
      const token2 = await auth.currentUser?.refreshToken;
      console.log(token);

      Cookies.set("jwt", token);
      navigate("/dashboard/alunos");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Algo deu errado", {
        description: "Email ou senha estão errados.",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      <Button onClick={() => console.log("currentUser")}>current</Button>

      <form className="pt-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500 text-sm ">
                  Endereço de email
                </FormLabel>
                <FormControl>
                  <Input {...field} className="mt-2" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500 text-sm ">Senha</FormLabel>
                <FormControl>
                  <Input {...field} className="mt-2" type="password" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <span className="text-gray-500 text-sm cursor-pointer hover:text-gray-800">
            Esqueceu sua senha?
          </span>
        </div>

        <div className="mt-8">
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? <LoadingSpinner /> : "Entrar"}
          </Button>
        </div>

        <div className="text-gray-500 text-sm text-center pt-4">
          <h1>Ainda não cadastrou sua academia?</h1>
          <Link
            to={"/register"}
            className="text-blue-700 font-semibold cursor-pointer"
          >
            Cadastre-se de graça!
          </Link>
        </div>
      </form>
    </Form>
  );
};
