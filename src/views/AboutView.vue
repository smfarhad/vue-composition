<template>
  <div class="about">
    <h1>About</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }}-{{ ninjaOne.age }}</p>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }}-{{ ninjaTwo.age }} - {{ nameTwo }} - </p>
    <button @click="updateNinjaTwo">updateNinjaTwo</button>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  name: 'About',
  setup() {
    const ninjaOne = ref({ name: 'Mario', age: 32 });
    const ninjaTwo = reactive({ name: 'Toma', age: 35 });
    let nameOne = ref('Mario');
    let nameTwo = reactive('name2');
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
      nameTwo = 'Poki'
    }
    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameOne, nameTwo }
  }
}
</script>
