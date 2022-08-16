import axios from "axios";

const api = axios.create({
  baseURL: "https://vue-keep-e8959-default-rtdb.firebaseio.com",
});

export * from "./notesApi";

export default api;
