// Serve para definir o estado do valur do input de search do componente
//<AlunoTableNavbar /> e passar para o <AlunosTable />

import { toast } from "sonner";
import { create } from "zustand";
import { Toaster } from "@/components/ui/sonner";

type SearchValue = {
  search: string;
  handleSearch: (searchValue: string) => void;
  cleanSearch: () => void;
};

export const useSearchAluno = create<SearchValue>((set) => ({
  search: "",
  handleSearch: (searchValue) => {
    set((state: SearchValue) => ({ search: searchValue }));
    console.log("seila");
  },
  cleanSearch: () => set((state) => ({ search: "" })),

  //quando eu procuro algo nos alunos e mudo para professores (ou vice versa), a busca ainda vai existir!
  //Aqui serve para limpar o valor
}));
