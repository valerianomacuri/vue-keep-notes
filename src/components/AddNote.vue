<template>
    <v-card v-if="hasFormNote" class="form-note">
        <v-card-title>
            <input v-model="note.title" type="text" placeholder="Título" class="input text-subtitle-1" ref="input"
                style="font-weight: 500;">
        </v-card-title>
        <v-card-text>
            <textarea v-model="note.content" placeholder="Añade una nota..." @input="resize()" ref="textarea"
                class="textarea text-body-2"></textarea>
        </v-card-text>
        <v-card-actions>
            <v-btn icon size="x-small">
                <v-icon icon="tag"></v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn size="small" @click="createNote()">
                Guardar
            </v-btn>
            <v-btn size="small" @click="closeFormNote()">
                Cerrar
            </v-btn>
        </v-card-actions>
    </v-card>
    <v-card v-else class="form-note" height="46" @click="openFormNote()">
        <v-card-title class="text-subtitle-1">
            Añade una nota..
        </v-card-title>
    </v-card>
</template>

<script setup lang="ts">
import { onUpdated, reactive, ref } from 'vue';
import { useCreateNoteMutation } from '../hooks';

let input = ref()
let textarea = ref()
let hasFormNote = ref(false)
let note = reactive({
    title: "",
    content: ""
})

const { mutate } = useCreateNoteMutation()

const createNote = () => {
    if (note.title === "" && note.content === "") return
    mutate({ ...note })
    closeFormNote()
    note.title = ""
    note.content = ""
}

const openFormNote = () => {
    hasFormNote.value = true
}

const closeFormNote = () => {
    hasFormNote.value = false
}

const resize = () => {
    textarea.value.style.height = "18px";
    textarea.value.style.height = textarea.value.scrollHeight + "px";
}

onUpdated(() => {
    console.log("updated")
    if (hasFormNote.value === true) {
        input.value.focus()
    }
})
</script>

<style scoped>
.input:focus,
.textarea:focus {
    border: none;
    outline: none;
}

.input {
    width: 100%;
}

.textarea {
    width: 100%;
    resize: none;
}

.form-note {
    width: 100%;
    margin-bottom: 30px;
}

@media screen and (min-width: 960px) {
    .form-note {
        width: 598px;
    }
}
</style>