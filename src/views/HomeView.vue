<template>
  <div class="home">
    Home
    <p ref="p"> Hi {{ name }} {{ age }} how are you</p>
    <button @click="handleEvent">Click Me</button>
    <button @click="age++">{{ age }}</button>
    <input type="type" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    //console.log(this);
    const p = ref(null);
    let name = ref('mario')
    let age = ref(31)
    let handleEvent = () => {
      name.value = "Farhad";
      age.value = 25
      // console.log(p, p.value);
      // p.value.classList.add('test');
      // p.value.textContent = 'hello Nano'
    }
    return { name, age, handleEvent, p }
  }
}
</script>
