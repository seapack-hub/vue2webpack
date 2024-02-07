<script>
//导入主页
import Home from "@/views/home/index.vue";
import Css3 from '@/views/css3Animation/index.vue'
export default {
  name:'HomeMain',
  components:{Home,Css3}
}

</script>

<template>
<!--  <home></home>-->
  <css3></css3>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>