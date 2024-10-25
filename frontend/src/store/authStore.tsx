import { create } from "zustand";
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

type User = {
  user: null | string;
};
type AuthStore = {
  currentUser: any;
  checkUser: any;
};

// export const useAuthStore = create<AuthStore>((set) => ({
//   currentUser: null,
//   addUser:
// }));
