<template>
    <div>
        <h3>{{ post.title }}</h3>
        <p> {{ post.body }}</p>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {

        });
    }
}
</script>

<style>

</style>