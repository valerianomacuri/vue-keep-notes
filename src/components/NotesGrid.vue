<template>
    <v-container v-if="notes" class="grey lighten-5 container">
        <v-hover v-slot="{ isHovering, props }" v-for="note in notes" :key="note.id">
            <v-card :elevation="isHovering ? 4 : 1" :class="{ 'on-hover': isHovering, 'card': true }" v-bind="props">
                <v-card-title class="text-subtitle-1" style="font-weight: 500;">
                    {{ note.title }}
                </v-card-title>
                <v-card-text class="text-body-2" style="font-weight: 400;">
                    <pre>{{ note.content }}</pre>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon size="x-small" v-if="isHovering" @click="deleteNote(note.id)" :loading="isLoading">
                        <v-icon icon="delete"></v-icon>
                    </v-btn>
                    <v-btn icon size="x-small" v-if="isHovering">
                        <v-icon icon="push_pin"></v-icon>
                    </v-btn>
                    <v-btn icon size="x-small" v-if="isHovering">
                        <v-icon icon="more_vert"></v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
    </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useDeleteNoteMutation, useNotesQuery } from "../hooks"

const { name } = useDisplay()
const { data: notes } = useNotesQuery()
const { mutate: deleteNote, isLoading } = useDeleteNoteMutation()


</script>

<style scoped>
.container {
    -webkit-column-count: 1;
    /* Chrome, Safari, Opera */
    -moz-column-count: 1;
    /* Firefox */
    column-count: 1;

    -webkit-column-gap: 10px;
    /* Chrome, Safari, Opera */
    -moz-column-gap: 10px;
    /* Firefox */
    column-gap: 10px;

}



.card {
    min-width: 238px;
    min-height: 104px;
    margin-bottom: 10px;
}

@media screen and (min-width: 600px) {
    .container {
        width: fit-content;
        -webkit-column-count: 1;
        /* Chrome, Safari, Opera */
        -moz-column-count: 1;
        /* Firefox */
        column-count: 1;
    }

    .card {
        width: 238px;
    }
}

@media screen and (min-width: 960px) {
    .container {
        width: fit-content;
        -webkit-column-count: 2;
        /* Chrome, Safari, Opera */
        -moz-column-count: 2;
        /* Firefox */
        column-count: 2;
    }

    .card {
        width: 238px;
    }
}

@media screen and (min-width: 1264px) {
    .container {
        -webkit-column-count: 3;
        /* Chrome, Safari, Opera */
        -moz-column-count: 3;
        /* Firefox */
        column-count: 3;
    }
}

@media screen and (min-width: 1536px) {
    .container {
        -webkit-column-count: 4;
        /* Chrome, Safari, Opera */
        -moz-column-count: 4;
        /* Firefox */
        column-count: 4;
    }
}

@media screen and (min-width: 1904px) {
    .container {
        -webkit-column-count: 5;
        /* Chrome, Safari, Opera */
        -moz-column-count: 5;
        /* Firefox */
        column-count: 5;
    }
}
</style>