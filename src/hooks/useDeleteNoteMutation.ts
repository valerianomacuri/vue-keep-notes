import { useMutation, useQueryClient } from "vue-query";
import { notesApi } from "../api";
import { useAuthStore } from "../store/auth";

export const useDeleteNoteMutation = () => {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (noteId: string) => notesApi.deleteNote(user?.uid as string, noteId),
    {
      onSuccess: async () => {
        queryClient.fetchQuery("notes");
      },
    }
  );
  return mutation;
};
