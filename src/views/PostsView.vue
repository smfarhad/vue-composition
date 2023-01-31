<template>
    <div>
        <h1>Posts View</h1>
        <p>sfsf </p>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "Posts",
    setup() {
        const posts = ref([
            { title: "Welcome to the blog", body: 'Lorem ipsum', id: 1 },
            { title: "Welcome to the blog 2", body: 'Lorem ipsum 2', id: 2 }
        ]);
        return { posts }
    }
}
</script>

<style>

</style>