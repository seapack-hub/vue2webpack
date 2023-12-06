<script>
//2D变换
import {TabPane, Tabs} from "view-ui-plus";
import App from "@/App.vue";

export default {
  name: "2DTransform",
  components: {App, TabPane, Tabs},
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
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">论坛</a></li>
          <li><a href="#">新闻</a></li>
          <li><a href="#">博客</a></li>
          <li><a href="#">团购</a></li>
          <li><a href="#">微博</a></li>
        </ul>
      </div>
    </TabPane>
    <TabPane label="倾斜">
      <div class="skew">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">论坛</a></li>
          <li><a href="#">新闻</a></li>
          <li><a href="#">博客</a></li>
          <li><a href="#">团购</a></li>
          <li><a href="#">微博</a></li>
        </ul>
      </div>
    </TabPane>
    <TabPane label="矩阵">
      <div class="matrix">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">论坛</a></li>
          <li><a href="#">新闻</a></li>
          <li><a href="#">博客</a></li>
          <li><a href="#">团购</a></li>
          <li><a href="#">微博</a></li>
        </ul>
      </div>
    </TabPane>
    <TabPane label="变换原点">
      <div class="origin">

      </div>
    </TabPane>
  </Tabs>

</template>

<style scoped lang="scss">
.rotate,.scale,.origin{
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

.translate{
  ul{
    list-style: none;
  }
  li{
    float: left;
    width: 100px;
    background: #CCC;
    margin-left: 30px;
    line-height: 30px;

    a{
      display: block;
      text-align: center;
      height: 30px;
    }

    a:link{
      color: #666;
      background: #999999;
      text-decoration: none;
    }
    a:visited{
      color:#666;
      text-decoration: underline;
    }
    a:hover{
      color:#FFF;
      font-weight: bold;
      text-decoration: none;
      transform: translate(4px,4px);
    }
  }

}

.skew{
  ul{
    list-style: none;
  }
  li{
    float: left;
    width: 100px;
    background: #CCC;
    margin-left: 30px;
    line-height: 30px;

    a{
      display: block;
      text-align: center;
      height: 30px;
    }

    a:link{
      color: #666;
      background: #999999;
      text-decoration: none;
    }
    a:visited{
      color:#666;
      text-decoration: underline;
    }
    a:hover{
      color:#FFF;
      font-weight: bold;
      text-decoration: none;
      transform: skew(30deg,-10deg);
    }
  }

}

.matrix{
  ul{
    list-style: none;
  }
  li{
    float: left;
    width: 100px;
    background: #CCC;
    margin-left: 30px;
    line-height: 30px;

    a{
      display: block;
      text-align: center;
      height: 30px;
    }

    a:link{
      color: #666;
      background: #999999;
      text-decoration: none;
    }
    a:visited{
      color:#666;
      text-decoration: underline;
    }
    a:hover{
      color:#FFF;
      font-weight: bold;
      text-decoration: none;
      transform: matrix(1,0.4,0,1,0,0);
    }
  }

}

.origin:hover{
  transform: rotate(-90deg);
  transform-origin: 0 0;
}
</style>