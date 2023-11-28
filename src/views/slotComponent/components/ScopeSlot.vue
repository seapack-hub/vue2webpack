<script>
export default {
  name: "ScopeSlot",
  data(){
    return {
      heading:"子组件的heading"
    }
  }
}
</script>

<template>
<div>
  <slot
      name="heading"
      v-bind:headValue="heading"
  >
    {{heading}}
  </slot>
</div>
</template>

<style scoped>

</style>