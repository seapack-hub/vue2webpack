<script>
export default {
  name: "headVue"
}
</script>

<template>
<div class="header">
  <div class="head_logo_div">
    <img class="logo_img" src="../images/long.jpg" alt=""/>
  </div>
  <div class="head_nav_div">
      <ul id="nav_ul">
        <li class="nav_li_on nav_ul_li">主页</li>
        <li class="nav_ul_li">工程</li>
        <li class="nav_ul_li">技能</li>
        <li class="nav_ul_li">爱好</li>
        <li class="nav_ul_li">联系方式</li>
      </ul>
  </div>
  <div class="clear"></div>
</div>
</template>

<style scoped>
.header{
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #f3f7fa;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo_img{
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
}

#nav_ul{
  margin: 50px auto;
  height: 70px;
  list-style: none;
}

#nav_ul li{
  display: inline;
  line-height: 70px;
  margin-left: 50px;
  font-weight: bold;
  font-family: 宋体,serif;
}
</style>