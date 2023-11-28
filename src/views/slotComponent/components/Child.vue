<script>
export default {
  name: "Child"
}
</script>

<template>
  <div>
    <!--具名插槽-->
    <slot name="header">这些文字不会被渲染！</slot>
    <!--匿名插槽-->
    <slot></slot>
  </div>

</template>

<style scoped>

</style>