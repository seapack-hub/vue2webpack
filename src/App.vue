<template>
  <router-view></router-view>
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
*{
  margin: 0;
  padding: 0;
}
</style>
