<template>
    <h1>Details Page</h1>
    <p>the job id is {{ $route.params.id }}</p>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>