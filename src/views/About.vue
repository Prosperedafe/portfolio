<template>
    <h2>About</h2>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'About-details', params: {id: job.id}}">
            <h2>{{ job.title }}</h2>
        </router-link>
    <h2>{{ job.about }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    title: 'Web Dev',
                    id: 1,
                    about: 'Lorem1'
                },
                {
                    title: 'UI/UX',
                    id: 1,
                    about: 'Lorem1'
                },
                {
                    title: 'dev ops',
                    id: 1,
                    about: 'Lorem1'
                }
            ]
        }
    }
}
</script>