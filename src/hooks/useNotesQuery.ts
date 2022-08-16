import { useQuery } from "vue-query";
import { notesApi } from "../api";
import { useAuthStore } from "../store/auth";

export const useNotesQuery = () => {
  const { user } = useAuthStore();
  return useQuery("notes", () => notesApi.getNotes(user?.uid as string));
};
