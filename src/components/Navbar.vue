<template>
    <header class="main-header">
        <nav class="container">
            <router-link to="/" class="logo">
                <img src="../assets/logo.svg" alt="logo">
            </router-link>
            <div class="nav-toggler" @click="toggleNav">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul :class="{ open: isActive }">
                <!-- <li><router-link to="/">HOME</router-link></li> -->
                <!-- <li><router-link to="/projects">PROJECTS</router-link></li> -->
                <li><a href="https://docs.google.com/document/d/1Mz_KxFEWQNWXJnGbJaWQyDMQV0K3ZwUylMJ6Ov1Dyyo/edit"
                        target="_blank">Résumé</a></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleNav() {
            this.isActive = !this.isActive;
        },
    },
    components: {
    }
});
</script>
