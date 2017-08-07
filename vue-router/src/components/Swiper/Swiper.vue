<template>
  <div class="swiper-container">
		<div class="swiper-wrapper" >
		  <div class="swiper-slide" v-for="swiperItem in swiperList">
		  	
		  	<router-link :to="{name:'details',query:{Date:JSON.stringify(swiperItem)}}">
			  	<img :src="swiperItem.img" />
			  	<div class="swiper_des">
			  		<h2>{{swiperItem.title}}</h2>
			  		<p>{{swiperItem.description}}</p>
			  	</div>
		  	</router-link>
		  </div>
		</div>
		<div class="swiper-pagination"></div>
  </div>
</template>
<script>

export default {
	data () {
		return {
			swiperList:[]
		}
	},
  methods: {
    swiper () {
			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: false,
				pagination: '.swiper-pagination',
				autoplay: 3000,
				touchRatio : 0.5,
				passiveListeners : false,
				paginationClickable :true,  // 分页器控制切换
				autoplayDisableOnInteraction : false,// 手指离开后，恢复autoplay
	      paginationType : 'fraction',   //分页器类型
	      paginationFractionRender: function (swiper, currentClassName, totalClassName) {
	        return '<span class="' + currentClassName + '"></span>' +
	             '/' +
	             '<span class="' + totalClassName + '"></span>';
	      }
			});
    },
    swiperDate (){
    	let _this = this;
    	this.$http.get('./static/date/swiper.txt').then(function (res){
    		_this.swiperList = res.data;
    	}).catch(function (err){
    		console.log(err)
    	})
    }
  },
  mounted () {
  
  	this.swiperDate()
  },
  updated(){
  	this.swiper();
  }
}
</script>

<style scoped>
@import url("css/swiper.min.css");
.swiper-slide{
	width: 100%;
	height: 275px;
    overflow: hidden;
}
.swiper-slide img{
	width: 100%;
	height: 275px;
}
.swiper-slide .swiper_des{
	width: 100%;
	height: 55px;
	background: rgba(0,0,0,0.6);
	position: absolute;
	left: 0px;
	bottom: 0px;
	z-index: 6;
}
.swiper_des>h2{
	margin: 8px 8px 0 20%;
	font-size: 16px;
	color: #fff;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.swiper_des>p{
	margin: 4px 8px 0 20%;
	font-size: 12px;
	color: #fff;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.swiper-pagination{
	width: auto;
	bottom: 10px;
	left: 14px;
	color: #fff;
	font-size: 16px;
}
</style>