<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue';

export default {
    props: ["posts"],
    setup(props) {
        onMounted(()=>{ console.log('component Mounted')});
        onUnmounted(()=>{console.log('component Unmounted')});
        onUpdated(()=>{console.log('component Updated')});
    },
    components: { SinglePost }
}

</script>
<style>

</style>