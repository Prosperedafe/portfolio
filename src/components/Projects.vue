<style>
@import '../assets/style/projects.css';
</style>
<script>
import techtime from '../assets/projects/Screenshot_20230602_004937.jpg';
import museum from '../assets/projects/Screenshot_20230602_005026.jpg';
import living from '../assets/projects/Screenshot_20230602_005111.jpg';
import formik from '../assets/projects/Screenshot_20230602_005205.jpg';
import movhub from '../assets/projects/Screenshot_20230602_005259.jpg';
import finebank from '../assets/projects/Screenshot_20230602_005321.jpg';
import weather from '../assets/projects/Screenshot_20230602_005357.jpg';
import blogr from '../assets/projects/Screenshot_20230602_005418.jpg';
import meta from '../assets/projects/Screenshot_20230602_005539.jpg';
import random from '../assets/projects/random.jpg';

export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    name: 'Techtime',
                    img: techtime,
                    about: 'Tech World',
                    url: 'https://tech-times.netlify.app/'
                },
                {
                    id: 2,
                    name: 'Art Museum',
                    img: museum,
                    about: 'Art',
                    url: 'https://art-museum-app.netlify.app/'
                },
                {
                    id: 3,
                    name: 'Smart Living',
                    about: 'Your dream home',
                    img: living,
                    url: 'https://prosperedafe.github.io/real-estate/'
                },
                {
                    id: 4,
                    name: 'Formik',
                    about: 'Form validation with formik',
                    img: formik,
                    url: 'https://formik-val.netlify.app/'
                },
                {
                    id: 5,
                    name: 'Movie Land',
                    about: 'Movei app',
                    img: movhub,
                    url: 'https://mov-hub.netlify.app/'
                },
                {
                    id: 6,
                    name: 'Finebank',
                    about: 'Finebank dashboard',
                    img: finebank,
                    url: 'https://finebankio.netlify.app/'
                },
                {
                    id: 7,
                    name: 'Weather',
                    about: 'Weather App',
                    img: weather,
                    url: 'https://p-weather.netlify.app/'
                },
                {
                    id: 8,
                    name: 'Blogr',
                    about: 'Blogr Landing Page',
                    img: blogr,
                    url: 'https://prosperedafe.github.io/Blogr-landing-page/'
                },
                {
                    id: 9,
                    name: 'Ar Metaverse',
                    about: 'Explore The world of Metaverse',
                    img: meta,
                    url: 'https://prosperedafe.github.io/Ar-metaverse/'
                },
                {
                    id: 10,
                    name: 'Random Tour',
                    about: 'Random People Generator',
                    img: random,
                    url: 'https://prosperedafe.github.io/Random-meetup-app/'
                },
            ],
        };
    },
};
</script>

<template>
    <section class="projects">
        <h2>Projects</h2>
        <p>Check out a few of the main projects I have worked on, or some of my side projects.
        </p>
        <div class="project">
            <div>
                <a v-for="link in links" :key="link.id" :href="link.url" target="_blank">
                    <div class="overlay"></div>
                    <figure>
                        <img :src="link.img" :alt="link.name">
                        <figcaption>{{ link.name }} <br> {{ link.about }}</figcaption>
                    </figure>
                </a>
            </div>
        </div>
    </section>
</template>