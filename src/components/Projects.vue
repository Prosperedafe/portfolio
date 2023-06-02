<template>
    <section class="projects">
        <h2>Projects</h2>
        <p>Check out a few of the main projects I have worked on, or some of my side projects on the left-hand side.
        </p>
        <div>
            <figure v-for="link in links" :key="link.id">
                <img :src="link.img" :alt="link.name">
                <figcaption>{{ link.name }}</figcaption>
                <a :href="link.url" target="_blank">{{ link.name }}</a>
            </figure>
        </div>
    </section>
</template>
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

export default {
    data() {
        return {
            links: [
                {
                    id: 3,
                    name: 'Techtime',
                    img: techtime,
                    url: 'https://github.com/Prosperedafe'
                },
                {
                    id: 2,
                    name: 'Art Museum',
                    img: museum,
                    url: 'https://www.linkedin.com/in/edafe-prosper-b046ba239/'
                },
                {
                    id: 3,
                    name: 'Smart Living',
                    img: living,
                    url: 'https://www.facebook.com/prosper.edafe.10?mibextid=ZbWKwL'
                },
                {
                    id: 4,
                    name: 'Formik',
                    img: formik,
                    url: 'https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09'
                },
                {
                    id: 5,
                    name: 'Movie Land',
                    img: movhub,
                    url: 'https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09'
                },
                {
                    id: 6,
                    name: 'Finebank',
                    img: finebank,
                    url: 'https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09'
                },
                {
                    id: 7,
                    name: 'Weather',
                    img: weather,
                    url: 'https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09'
                },
                {
                    id: 8,
                    name: 'Blogr',
                    img: blogr,
                    url: 'https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09'
                },
                {
                    id: 9,
                    name: 'Ar Metaverse',
                    img: meta,
                    url: 'https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09'
                },
            ],
        };
    },
};
</script>