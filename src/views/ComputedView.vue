<template>
    <div class="computed">
        <h1> Computed Method</h1>
        <input type="text" v-model="search">
        <p>search term {{ search }} </p>
        <ul>
            <li v-for="name in matchingNames" :key="name"> {{ name }} </li>
        </ul>
        <button @click="handleWatch">Stop watch</button>
    </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    name: "Compute",
    setup() {
        // const name = computed(() => {
        //     return 'Shan'
        // });
        const search = ref('');
        const names = ref(['Farhad', 'Jewel', 'Akib', 'Rana', 'Shohag']);
        const stopWatch = watch(search, () => {
            console.log('watch function');
        });
        const stopEffect = watchEffect(() => {
            console.log('watcheffect function', search.value);
        });
        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })
        const handleWatch = () => {
            stopWatch();
            stopEffect();
        }
        return { names, search, matchingNames, handleWatch }
    }

}
</script>

<style>

</style>