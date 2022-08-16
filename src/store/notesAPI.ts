import { defineStore } from "pinia";
import { ref } from "vue";
import { NotesAPI } from "../api";

export const useNotesAPIStore = defineStore("@api/notes", () => {
  const notesAPI = ref(new NotesAPI());

  const setUID = (uid: string) => {
    notesAPI.value.updateUID(uid);
  };

  return {
    notesAPI,

    setUID,
  };
});
