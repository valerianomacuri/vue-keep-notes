<template>
    <v-navigation-drawer expand-on-hover :rail="rail" permanent>
        <!-- some -->
        <template v-slot:prepend>

        </template>
        <v-divider></v-divider>
        <v-list nav>
            <v-list-item v-for="item in items" :prepend-icon="item.icon" :title="item.title" :value="item.value"
                color="warning">
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

let items = [
    { title: 'Notas', icon: 'lightbulb', value: "notas" },
    { title: 'Recordatorio', icon: 'notifications', value: "recordatorio" },
]

const { name } = useDisplay()

const rail = computed(() => {
    switch (name.value) {
        case 'xs': return true
        default: return false
    }
})

</script>

<style scoped>
</style>