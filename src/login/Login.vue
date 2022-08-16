<template>
    <v-container :style="{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }">
        <v-card width="448" height="500" elevation="1" style="padding: 20px 0; display: flex; flex-direction: column; ">
            <v-card-item>
                <div style="display: flex; justify-content: center; width: 100%">
                    <img width="74" height="24"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png">
                </div>
                <v-card-title style="text-align: center;">Selecciona una cuenta</v-card-title>
            </v-card-item>
            <v-card-item>
                <v-list nav>
                    <template v-for="user in users" :key="user.uid">
                        <v-list-item :title="user.displayName" :subtitle="user.email" class="list-item"
                            @click="signInFromBrowser(user.uid)">
                            <template v-slot:prepend>
                                <v-avatar>
                                    <!-- <v-img :src="getImageURL(user.photoURL)" :alt="user.displayName"></v-img> -->
                                    <v-icon icon="account_circle"></v-icon>
                                </v-avatar>
                            </template>
                        </v-list-item>
                        <v-divider style="margin: 5px 16px;"></v-divider>
                    </template>
                    <v-list-item title="Usar otra cuenta" class="list-item" @click="signIn()">
                        <template v-slot:prepend>
                            <v-avatar>
                                <v-icon icon="account_circle"></v-icon>
                            </v-avatar>
                        </template>
                    </v-list-item>
                    <v-divider style="margin: 5px 16px;"></v-divider>
                </v-list>
            </v-card-item>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

const router = useRouter()
const authStore = useAuthStore()

const { status, users } = storeToRefs(authStore)
const { signIn, signInFromBrowser } = authStore

const getImageURL = (url: string) => {
    return new URL(url, import.meta.url).href
}


watchEffect(() => {
    console.log("ref::status ->", status.value)
    if (status.value === "authenticated") {
        router.push({ name: "notes", replace: true })
    }
})

</script>

<style scoped>
.list-item {
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
}

.list-item:hover {
    background-color: #eee;
}
</style>