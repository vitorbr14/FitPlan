// Serve para definir o estado do valur do input de search do componente
//<AlunoTableNavbar /> e passar para o <AlunosTable />

import { create } from "zustand";

type SearchValue = {
  search: string;
  handleSearch: (searchValue: string) => void;
  cleanSearch: () => void;
};

export const useSearchAluno = create<SearchValue>((set) => ({
  search: "",
  handleSearch: (searchValue) => {
    set((state: SearchValue) => ({ search: searchValue }));
  },
  cleanSearch: () => set((state) => ({ search: "" })),

  //quando eu procuro algo nos alunos e mudo para professores (ou vice versa), a busca ainda vai existir!
  //Aqui serve para limpar o valor
}));
