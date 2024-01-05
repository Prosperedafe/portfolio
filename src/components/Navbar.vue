<template>
    <header>
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
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/about">ABOUT ME</router-link></li>
                <li><router-link to="/contact">CONTACT</router-link></li>
                <li><a href="#">Résumé</a></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from './Logo.vue';

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
        Logo,
    }
});
</script>
