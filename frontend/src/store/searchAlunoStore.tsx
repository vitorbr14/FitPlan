// Serve para definir o estado do valur do input de search do componente
//<AlunoTableNavbar /> e passar para o <AlunosTable />

import { create } from "zustand";

type SearchValue = {
  search: string;
  handleSearch: (searchValue: string) => void;
};

export const useSearchAluno = create<SearchValue>((set) => ({
  search: "",
  handleSearch: (searchValue) =>
    set((state: SearchValue) => ({ search: searchValue })),
}));
