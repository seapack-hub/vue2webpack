<template>
  <IndexView></IndexView>
  <slot-component></slot-component>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IndexView from './views/index.vue'
import SlotComponent from "@/views/slotComponent/index.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,IndexView,SlotComponent
  }
}
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
