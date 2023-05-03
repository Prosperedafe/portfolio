<template>
    <header>
        <nav id="nav">
            <ul>
                <li>
                    <router-link :to="{name: 'Home' }" >Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'About'}">About</router-link>
                </li>
                <li>Blog</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>

        <button @click="redirect" >redirect</button>
        <button @click="back" >Go back</button>
        <button @click="foward">Go foward</button>

    </header>
</template>

<script>
export default {
    methods: {
        redirect() {
            this.$router.push({name: 'Home'})
        },
        back() {
            this.$router.go(-1)
        },
        foward() {
            this.$router.go(+1)
        },
    }
}
</script>