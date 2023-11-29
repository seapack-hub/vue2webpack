<script>
const cardDataList = [{
  title: '杭州市通用5元券',
  subTitle:
      '杭味面馆非常好吃，太好吃了，相当不错，味道鲜美，特别划算，快快抢购，聚划算',
},
  {
    title:'杭州市10元券',
    subTitle: '兰州拉面非常好吃',
}];
export default {
  name: "CardTest",
  data(){
    return {
      arr:[],
      title:'',
      buttonTitle:'抢购',
      count:11,
      setInter:''
    }
  },
  created(){
    let arr = cardDataList.concat();
    arr.forEach(e=>{
      Reflect.set(e,'count',11);
      Reflect.set(e,'buttonTitle','抢购');
      //判断是否被抢购
      Reflect.set(e,'isBool',false);
    })
    this.arr = arr;
  },
  //渲染完成进入这个界面
  mounted() {
    // this.cardDataList = arr;
    //开始计数
    this.countNumber();
  },
  watch:{
    count:{
      handler(value){
        this.arr.forEach(e=>{
          if(!e.isBool){
            e.count=value
          }
        });
        if(value<0){
          clearInterval(this.setInter);
        }
      }
    }
  },
  methods:{
    click(item){
      setTimeout(()=>{
        item.count = -1;
        item.buttonTitle = '已抢购';
        item.isBool = true;
      },1000)
    },
    countNumber(){
      this.count--;
      this.setInter = setInterval(()=>{
        this.count--;
      },1000)
    }
  }
}
</script>

<template>
  <div class="card" v-for="(item,index) in arr" :key="index">
    <div>
      <div class="title">{{item.title}}</div>
      <div class="subTitle">{{item.subTitle}}</div>
    </div>
    <div>
      <button class="button" @click="click(item)">{{item.count>0?`${item.count}s`:item.buttonTitle}}</button>
    </div>
  </div>
</template>

<style scoped>
.card{
  height: 136px;
  width:430px;
  border-radius: 12px;
  background-color: #FFF0F1;
  margin-left: 30px;
  margin-right: 24px;
  margin-top: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title{
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  width: 190px;
}
.subTitle{
  font-size: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  width: 190px;
  height: 60px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

}

.button{
  width: 108px;
  height: 45px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #F00;
  border: 1px solid #F00;
}
</style>