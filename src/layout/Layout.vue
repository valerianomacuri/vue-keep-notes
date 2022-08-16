<template>
    <v-layout>
        <Appbar />
        <Drawer />
        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid :style="{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }">
                <AddNote />
                <NotesGrid />
            </v-container>
        </v-main>
        <v-footer app>
            <!-- -->
        </v-footer>
    </v-layout>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import Drawer from '../components/Drawer.vue';
import Appbar from '../components/Appbar.vue';
import NotesGrid from '../components/NotesGrid.vue';
import AddNote from '../components/AddNote.vue';
import { watchEffect } from 'vue';
import { useAuthStore } from '../store/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore()
const { status } = storeToRefs(authStore)

watchEffect(() => {
    console.log("ref::status ->", status.value)
    if (status.value === "not-authenticated") {
        router.push({ name: "auth", replace: true })
    }
})

</script>
