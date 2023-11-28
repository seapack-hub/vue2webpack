<script>
export default {
  name: "Card",
  props:{
    title:{
      type:String,
      require:false
    },
    list:{
      type:Array,
      require: false
    }
  },
  data(){
    return {}
  }
}
</script>

<template>
<div class="card">
  <h3><slot name="title" v-bind:titleValue="title">{{title}}</slot></h3>
  <p v-for="item in list" :key="item.id">
    <slot name="text" v-bind:itemValue="item">{{item.id}}.{{item.text}}</slot>
  </p>
</div>
</template>

<style scoped>
p{
  border-bottom: 2px solid #fff;
  padding-bottom:5px;
}
</style>