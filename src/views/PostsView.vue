<template>
    <div>
        <h1>Posts View</h1>
        <PostList />
    </div>
</template>

<script>
import { ref } from "vue";
import PostList from '../components/'
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