<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ counterStore.counter }}</h1>
  <div>
    <button @click="counterStore.increment">+</button>
    <button @click="counterStore.$reset">Reset</button>
    <button @click="changeToTen">Change counter to 10</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounterStore from './stores/useCounterStore';

export default defineComponent({
  name: 'App',
  setup() {
    const counterStore = useCounterStore();

    const changeToTen = () => {
      counterStore.$patch({
        counter: 10,
      });
    };

    return { counterStore, changeToTen };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
