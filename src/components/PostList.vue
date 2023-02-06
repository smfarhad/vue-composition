<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
            <div>{{ post.body }}</div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['posts']
}
</script>

<style>

</style>