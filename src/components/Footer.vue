<template>
    <footer>
        <!-- <Vue3Marquee id="marquee-slider" :speed="1000" :width="50">
            <img src="https://shorturl.at/d0459" />
            <img src="https://shorturl.at/eQXZ5" />
            <img src="https://shorturl.at/lqrW2" />
            <img src="https://shorturl.at/ghkoX" />
            <img src="https://shorturl.at/oqSZ8" />
        </Vue3Marquee> -->
        <div class="social">
            <a href="https://github.com/Prosperedafe" target="_blank" rel="noopener noreferrer" class="github">Github</a>
            <a href="mailto:mamusedafe19@gmail.com" target="_blank" rel="noopener noreferrer" class="gmail">Gmail</a>
            <a href="https://www.instagram.com/prosperedafe19/" target="_blank" rel="noopener noreferrer"
                class="instagram">Instagram</a>
            <a href="https://web.facebook.com/prosper.edafe.10/" target="_blank" rel="noopener noreferrer"
                class="facebook">Facebook</a>
            <a href="https://twitter.com/EdafeProsp65226" target="_blank" rel="noopener noreferrer" class="twitter">X</a>
            <a href="https://wa.me/message/NDTOEBZRRD4WJ1" target="_blank" rel="noopener noreferrer"
                class="whatsapp">Whatsapp</a>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vue3Marquee from 'vue3-marquee';

export default defineComponent({
    components: {
        Vue3Marquee
    },
});
</script>
