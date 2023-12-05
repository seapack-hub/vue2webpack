<script>
//2D变换
import {TabPane, Tabs} from "view-ui-plus";

export default {
  name: "2DTransform",
  components: {TabPane, Tabs},
  data(){
    return {

    }
  }
}
</script>

<template>
  <Tabs type="card">
    <TabPane label="旋转">
      <div class="rotate">
      </div>
    </TabPane>
    <TabPane label="缩放">
      <div class="scale"></div>
    </TabPane>
    <TabPane label="移动">
      <div class="translate">

      </div>
    </TabPane>
    <TabPane label="倾斜">4</TabPane>
    <TabPane label="矩阵">5</TabPane>
    <TabPane label="变换原点">6</TabPane>
  </Tabs>

</template>

<style scoped lang="scss">
.rotate,.scale{
  width: 200px;
  height: 50px;
  margin: 100px auto;
  background: #93FB40;
  border-radius: 12px;
}

.rotate:hover{
  //rotate里面跟的是度数，单位是deg,角度为正时，是顺时针旋转，为负时，是逆时针旋转
  transform: rotate(-90deg);
}

.scale{
  box-shadow: 2px 2px 2px #999;
}

.scale:hover{
  transform: scale(1.5);
}


</style>