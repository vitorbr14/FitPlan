// Adicionar Children quando for colocar o dialog!!!
// Por enquanto vai ficar sem

import { Button } from "@/components/ui/button";

type TypeBtnTabela = {
  label: string;
  isDisabled?: boolean;
};
export const BtnTabela = ({ label, isDisabled }: TypeBtnTabela) => {
  return (
    <Button
      className="absolute left-[100%] z-10 translate-x-[-100%] top-[-4rem] "
      variant="default"
      disabled={isDisabled}
    >
      {label}
    </Button>
  );
};
