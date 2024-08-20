import { Container } from "@/components/layout/Container";
import { RegisterForm } from "@/components/register/RegisterForm";
import React from "react";

export const Register = () => {
  return (
    <div className="bg-blue-600 h-screen flex justify-center items-center">
      <RegisterForm />
    </div>
  );
};
