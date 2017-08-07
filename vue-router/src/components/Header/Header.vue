<template>
  <div class="header">
    <div class="head_bg">
      <div class="head_logo">
      	<router-link tag="div" to="/home">
      		<img src="../../assets/img/head_logo.png" alt="logo" />
      	</router-link>     
      </div>
    </div>
    <div class="nav">
  	  <nav class="navBar">
	  		<router-link to="/home" class="navItem">首页</router-link>
	      <router-link to="/politics" class="navItem">时政</router-link>
	  		<router-link to="/annals" class="navItem">历史</router-link>
	  		<router-link to="/gallery" class="navItem">图库</router-link>
	  		<router-link to="/military" class="navItem">军事</router-link>
	  		<router-link to="/war" class="navItem">战争</router-link>
	  		<router-link to="/society" class="navItem">社会</router-link>
  	  </nav>
    </div>
  </div>
</template>

<script>
import Home from '../Home/Home.vue'
export default {
  name: 'header',
	components: {
     Home
	}
}
</script>

<style scoped>
.header{
	width: 100%;
	height: 81px;
}
.head_bg {
    width: 100%;
    height: 45px;
    background-image: url(img/head_bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.head_bg .head_logo{
	width: 131px;
	height: 45px;
}
.head_bg .head_logo img{
	width: 131px;
	height: 45px;
}
.nav{
	width: 100%;
	height: 36px;
	font-size: 0;
}
.nav .navBar{
	width: 100%;
	height: 36px;
	background-image: url(img/navbar_bg.png);
	background-repeat: no-repeat;
  background-size: 100% 100%;
}
.nav .navBar .navItem{
	display: inline-block;
	width: 14%;
	height: 36px;
	font-size: 14px;
	color: #fff;
	line-height: 36px;
	text-align: center;
}
</style>