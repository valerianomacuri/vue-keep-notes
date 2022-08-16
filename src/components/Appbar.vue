<template>
    <v-app-bar :elevation="1">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Keep Notes" />
        <v-app-bar-title>
            Keep
        </v-app-bar-title>

        <template v-slot:append>
            <v-btn icon :loading="isCreatingNote === 1">
                <v-icon icon="cloud_done"></v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon icon="more_vert"></v-icon>
            </v-btn>
            <v-avatar style="align-self: center">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useIsMutating } from 'vue-query';

const isCreatingNote = useIsMutating({
    mutationKey: "note/create"
})

</script>

<style scoped>
</style>