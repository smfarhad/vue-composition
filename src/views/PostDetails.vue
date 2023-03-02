<template>
    <div v-if="error"> {{ error }} </div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <div>{{ post.body }}</div>
        <div>
            <span v-for="tag in post.tags"> #{{ tag }}</span>
        </div>
    </div>
</template>
<script>
import getPost from "../composables/getPost";
export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id);
        load();
        return { post, error, load }
    }
}
</script>
<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}
</style>