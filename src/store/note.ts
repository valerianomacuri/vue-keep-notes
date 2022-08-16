import { defineStore } from "pinia";
import { readonly, ref } from "vue";
import { Note } from "../shared/types";

export const useNoteStore = defineStore("note", () => {
  let notes = ref<Note[]>([]);

  return {
    notes: readonly(notes),
  };
});
