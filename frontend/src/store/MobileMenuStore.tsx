import { create } from "zustand";

type useMobileMenuType = {
  isOpen: boolean;
  handleIsOpen: () => void;
};

export const useMobileMenu = create<useMobileMenuType>((set) => ({
  isOpen: false,
  handleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
