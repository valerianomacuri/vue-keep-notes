import { useMutation, useQueryClient } from "vue-query";
import { notesApi } from "../api";
import { Note } from "../shared/types";
import { useAuthStore } from "../store/auth";

export const useCreateNoteMutation = () => {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  return useMutation(
    (newNote: Note) => notesApi.createNote(user?.uid as string, newNote),
    {
      mutationKey: "note/create",
      onSuccess: async () => {
        queryClient.fetchQuery("notes");
      },
    }
  );
};
