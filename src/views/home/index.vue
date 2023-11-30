<script>
//引入头部
import headVue from "@/views/home/components/HeadVue.vue";
import MainVue from "@/views/home/components/MainVue.vue";
export default {
  name: "index",
  components:{ headVue,MainVue}
}
</script>

<template>
<div class="home">
  <!--头部-->
  <header class="header">
    <head-vue></head-vue>
  </header>

  <main class="main">
    <main-vue></main-vue>
  </main>

  <footer class="footer">
   尾部
  </footer>

</div>
</template>

<style scoped>
.home{
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
}
.header{
  height: 70px;
}
.main{
  flex:1;
}
.footer{
  height: 70px;
}
</style>