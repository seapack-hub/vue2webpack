<script>
import {Carousel, CarouselItem} from "view-ui-plus";
import FirstDemo from "@/views/home/components/main-components/FirstDemo.vue";
import SecondDemo from '@/views/home/components/main-components/SecondDemo.vue';
import ThirdDemo from "@/views/home/components/main-components/ThirdDemo.vue";
import ForthDemo from "@/views/home/components/main-components/ForthDemo.vue";
export default {
  name: "MainVue",
  components: {CarouselItem, Carousel,FirstDemo,SecondDemo,ThirdDemo,ForthDemo},
  data(){
    return {
      value:0
    }
  }
}
</script>

<template>
  <div class="carousel">
    <Carousel v-model="value" loop height="100%">
      <CarouselItem class="carousel-item">
        <first-demo></first-demo>
      </CarouselItem>
      <CarouselItem>
        <second-demo></second-demo>
      </CarouselItem>
      <CarouselItem>
        <third-demo></third-demo>
      </CarouselItem>
      <CarouselItem>
        <forth-demo></forth-demo>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
.carousel{
  height: calc(100vh - 140px);

}

.carousel :deep .ivu-carousel{
  height: 100%;
  .ivu-carousel-list{
    height: 100%;
    .ivu-carousel-track{
      height: 100%;
    }
  }
}
.carousel-item{
  height: 100%;
}
</style>