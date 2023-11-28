<script>
//试验插槽功能
import Child from "@/views/slotComponent/components/Child.vue";
import OtherChild from "@/views/slotComponent/components/OtherChild.vue";
import ScopeSlot from "@/views/slotComponent/components/ScopeSlot.vue";
import Card from "@/views/slotComponent/components/Card.vue";
export default {
  name: "index",
  components:{Child,OtherChild,ScopeSlot,Card},
  data(){
    return {
      title:'名人名言',
      list:[
        {
          id:1,
          text:'要成功，先发疯，头脑简单向前冲'
        },
        {
          id:2,
          text:'不能天生丽质就只能天生励志！'
        },
        {
          id:3,
          text:'世上唯一不能复制的是时间，唯一不能重演的是人生。'
        },
      ]
    }
  }
}
</script>

<template>
  <div id="root">
    <h1>父组件</h1>
    <h5>默认插槽和具名插槽</h5>
    <div>
      <child>
        <!--v-slot can only be used on components or <template> tags.-->
        <template v-slot:default>
          <p>在组件中没有指定插槽名称的元素将被置为默认插槽中</p>
        </template>
        <template v-slot:header>
          <p>使用具名插槽分发内容</p>
          <h3>插槽测试!</h3>
        </template>
      </child>
    </div>

    <h5>作用域插槽</h5>
    <div>
      <p>将子组件数据传递给父组件</p>
      <scope-slot v-slot:heading="slotValue">
        <h3>element-ui组件</h3>
        slotValue = {{slotValue}}
      </scope-slot>
    </div>

    <h5>作用域插槽运用实例</h5>
    <Card class="card" :list="list"  :title="title">
      <template v-slot:text="slotItem">
        {{slotItem.itemValue.text}}
      </template>
    </Card>
  </div>

</template>

<style scoped>

h5{
  color: chartreuse;
}

#root>div{
  border: 1px solid red;
}

.card{
  color:#fff;
  background-color: rgba(232,0,0,0.3);
  padding: 20px;
  text-align: left;
}
</style>