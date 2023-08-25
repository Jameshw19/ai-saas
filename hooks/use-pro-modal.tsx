import { create } from "zustand";

interface useProModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false, //set true to see and develop
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
