import api from ".";
import { Note } from "../shared/types";
import _ from "lodash";

const getNotes = (uid: string) => {
  return api
    .get(`/${uid}.json`)
    .then(({ data }) => data || [])
    .then((data) => Object.keys(data).map((id) => ({ id, ...data[id] })));
};

const createNote = (uid: string, note: Note) => {
  return api.post(`/${uid}.json`, note);
};

const deleteNote = (uid: string, noteId: string) => {
  return api.delete(`/${uid}/${noteId}.json`);
};

export const notesApi = {
  getNotes,
  createNote,
  deleteNote,
};

export class NotesAPI {
  private uid?: string;

  constructor(uid?: string) {
    this.uid = uid;
  }

  getNotes() {
    return api
      .get(`/${this.uid}.json`)
      .then(({ data }) => data || [])
      .then((data) => Object.keys(data).map((id) => ({ id, ...data[id] })));
  }

  createNote(note: Note) {
    return api.post(`/${this.uid}.json`, note);
  }

  deleteNote(noteId: string) {
    return api.delete(`/${this.uid}/${noteId}.json`);
  }

  updateUID(uid: string) {
    this.uid = uid;
  }
}
