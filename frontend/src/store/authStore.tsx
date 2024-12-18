import { auth } from "@/config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect } from "react";
import { create } from "zustand";

type AuthStoreType = {
  currentUser: User | null;
};

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      // User is signed out
      // ...
    }
  });
}, []);
export const authStore = create<AuthStoreType>(() => ({
  currentUser: null,
}));
