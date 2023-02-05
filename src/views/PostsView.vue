<template>
    <div>
        <h1>Posts View</h1>
        {{ names }}
    </div>
</template>
<script>
// import PostList from '../components/PostList.vue'
import { ref } from "vue";
export default {
    name: "PostPage",
    components: { PostList },
    setup() {
        const names = ref(['Farhad', 'Jewel', 'Akib', 'Rana', 'Shohag']);
        const posts = ref([
            { title: "Welcome to the blog", body: 'Lorem ipsum', id: 1 },
            { title: "Welcome to the blog 2", body: 'Lorem ipsum 2', id: 2 },
            { title: "Welcome to the blog 3", body: 'Lorem ipsum 3', id: 3 }
        ]);

        return { posts, names }
    }
}
</script>

<style>

</style>