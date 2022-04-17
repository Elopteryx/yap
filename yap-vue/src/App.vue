<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <SimpleText text="This is a subtitle."/>
  <ClockDisplay/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ClockDisplay from './components/ClockDisplay.vue';
import HelloWorld from './components/HelloWorld.vue';
import SimpleText from './components/SimpleText.vue';

@Options({
  components: {
    ClockDisplay,
    HelloWorld,
    SimpleText,
  },
})
export default class App extends Vue {}
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
