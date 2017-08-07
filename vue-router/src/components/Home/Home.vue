<template>
  <div class="index">
	  <v-swiper></v-swiper>
	  <div class="content">
  	  <div class="tody_hot">
  	  	<div class="con_head clearfix">
  	  		<div class="namebar">
  	  			<span class="fl"></span>
  	  			<p class="title fl">今日热点</p>
  	  			<p class="retitle fl">HOTSPOT</p>
  	  		</div>
  	  		<div class="clumnblack fr"></div>
  	  	</div>
  	  	<ul class="list">
  	  		<li class="li_items" v-for="(item,index) in hotSpotList" >
  	  			<router-link :to="{name:'details',query:{Date:JSON.stringify(item)}}">
  	  				<span>{{item.title}}</span> 
  	  			</router-link>
  	  		</li>
  	  	</ul>
  	  </div>	  
  	  <div class="politics clearfix">
  	  	<div class="con_head clearfix">
  	  		<div class="namebar">
  	  			<span class="fl"></span>
  	  			<p class="title fl">时政要闻</p>
  	  			<p class="retitle fl">POLITICS</p>
  	  		</div>
  	  		<div class="clumnblack fr"></div>
  	  	</div>
  	  	<div class="tpc_list">
  	  		<div class="tpc_items clearfix" v-for="tpcItem in politicsList">
  	  			<router-link :to="{name:'details',query:{Date:JSON.stringify(tpcItem)}}">
	  	  			<div class="tpc_pic fl">
	  	  				<img :src="tpcItem.img" />
	  	  			</div>
	  	  			<div class="tpc_t">
	  	  				<h3 class="tpc_caption">{{tpcItem.title}}</h3>
	  	  				<p class="tpc_des">{{tpcItem.description}}</p>
	  	  				<div class="tpc_date">
	  	  					<span>{{tpcItem.tiemDate}}</span>
	  	  				</div>
	  	  			</div>
  	  			</router-link>
  	  		</div>
	  			<router-link to="/politics">
	  			  <v-more></v-more>
	  		  </router-link>
  	  	</div>
  	  </div>	  
  	  <div class="history">
  	  	<div class="con_head clearfix">
  	  		<div class="namebar">
  	  			<span class="fl"></span>
  	  			<p class="title fl">历史军事</p>
  	  			<p class="retitle fl">HISTORY</p>
  	  		</div>
  	  		<div class="clumnblack fr"></div>
  	  	</div>
  	  	<div class="first" v-for="(firHis,index) in historyList" v-show="index==0">
  	  		<router-link :to="{name:'details',query:{Date:JSON.stringify(firHis)}}">
	  	  		<h2 class="first_tit">{{firHis.title}}</h2>
	  	  		<div class="first_con clearfix">
	  	  			<div class="first_pic fl">
	  	  				<img :src="firHis.img" />
	  	  			</div>
	  	  			<div class="first_des">
	  	  				<p>{{firHis.description}}</p>
	  	  			</div>
	  	  		</div>
	  	  	</router-link>
  	  	</div>
  	  	<ul class="list">
  	  		<li class="li_items" v-for="(hisItem,index) in historyList" v-show="index>0">
  	  			<router-link :to="{name:'details',query:{Date:JSON.stringify(hisItem)}}">
  	  			  <span>{{hisItem.title}}</span>
  	  			</router-link>
  	  		</li>
  	  		<router-link to="/annals">
	  			  <v-more></v-more>
	  		</router-link>
  	  	</ul>
  	  </div> 	  
  	  <div class="gallery">
  	  	<div class="con_head clearfix">
  	  		<div class="namebar">
  	  			<span class="fl"></span>
  	  			<p class="title fl">军事图库</p>
  	  			<p class="retitle fl">GALLERY</p>
  	  		</div>
  	  		<div class="clumnblack fr"></div>
  	  	</div>
  	  	<div class="picList">
  	  		<div class="pic_items">
  	  			<img src="./img/juns_1.png" />
  	  			<p class="pic_des">娇美妻子独自离家打工</p>
  	  		</div>
  	  		<div class="pic_items">
  	  			<img src="./img/juns_1.png" />
  	  			<p class="pic_des">娇美妻子独自离家打工</p>
  	  		</div>
  	  		<div class="pic_items">
  	  			<img src="./img/juns_1.png" />
  	  			<p class="pic_des">娇美妻子独自离家打工</p>
  	  		</div>
  	  		<div class="pic_items">
  	  			<img src="./img/juns_1.png" />
  	  			<p class="pic_des">娇美妻子独自离家打工</p>
  	  		</div>
  	  		<div class="pic_items">
  	  			<img src="./img/juns_1.png" />
  	  			<p class="pic_des">娇美妻子独自离家打工</p>
  	  		</div>
  	  		<div class="pic_items">
  	  			<img src="./img/juns_1.png" />
  	  			<p class="pic_des">娇美妻子独自离家打工</p>
  	  		</div>
  	  		<router-link to="/gallery">
	  			  <v-more></v-more>
	  		  </router-link>
  	  	</div>
  	  </div> 	  
  	  <div class="news">
  	  	<div class="con_head clearfix">
  	  		<div class="namebar">
  	  			<span class="fl"></span>
  	  			<p class="title fl">军事新闻</p>
  	  			<p class="retitle fl">NEWS</p>
  	  		</div>
  	  		<div class="clumnblack fr"></div>
  	  	</div>
  	  	<div class="first" v-for="(firNews,index) in newsList" v-show="index==0">
  	  		<router-link :to="{name:'details',query:{Date:JSON.stringify(firNews)}}">
	  	  		<h2 class="first_tit">{{firNews.title}}</h2>
	  	  		<div class="first_con clearfix">
	  	  			<div class="first_pic fl">
	  	  				<img :src="firNews.img" />
	  	  			</div>
	  	  			<div class="first_des">
	  	  				<p>{{firNews.description}}</p>
	  	  			</div>
	  	  		</div>
	  	  	</router-link>
  	  	</div>
  	  	<ul class="list">
  	  		<li class="li_items" v-for="(newsItem,index) in newsList" v-show="index>0">
  	  			<router-link :to="{name:'details',query:{Date:JSON.stringify(newsItem)}}">
  	  			<span>{{newsItem.title}}</span>
  	  			</router-link>
  	  		</li>
  	  		<router-link to="/military">
	  			  <v-more></v-more>
	  		  </router-link>
  	  	</ul>
  	  </div> 	  
  	  <div class="warfare">
  	  	<div class="con_head clearfix">
  	  		<div class="namebar">
  	  			<span class="fl"></span>
  	  			<p class="title fl">军事战争</p>
  	  			<p class="retitle fl">WARFARE</p>
  	  		</div>
  	  		<div class="clumnblack fr"></div>
  	  	</div>
  	  	<div class="first" v-for="(firWar,index) in warList" v-show="index==0">
  	  		<router-link :to="{name:'details',query:{Date:JSON.stringify(firWar)}}">
	  	  		<h2 class="first_tit">{{firWar.title}}</h2>
	  	  		<div class="first_con clearfix">
	  	  			<div class="first_pic fl">
	  	  				<img :src="firWar.img" />
	  	  			</div>
	  	  			<div class="first_des">
	  	  				<p>{{firWar.description}}</p>
	  	  			</div>
	  	  		</div>
	  	  	</router-link>
  	  	</div>
  	  	<ul class="list">
  	  		<li class="li_items" v-for="(warItem,index) in warList" v-show="index>0">
  	  			<router-link :to="{name:'details',query:{Date:JSON.stringify(warItem)}}">
  	  			  <span>{{warItem.title}}</span> 
  	  			</router-link>
  	  		</li>
  	  		<router-link to="/war">
	  			  <v-more></v-more>
	  		</router-link>
  	  	</ul>
  	  </div> 
  	  <div class="social">
  	  	<div class="con_head clearfix">
  	  		<div class="namebar">
  	  			<span class="fl"></span>
  	  			<p class="title fl">社会百态</p>
  	  			<p class="retitle fl">SOCIAL</p>
  	  		</div>
  	  		<div class="clumnblack fr"></div>
  	  	</div>
  	  	<div class="picList">
  	  		<div class="pic_items" v-for="socialItem in socialList">
  	  			<router-link :to="{name:'details',query:{Date:JSON.stringify(socialItem)}}">
  	  			  <img :src="socialItem.img" />
  	  			  <p class="pic_des">{{socialItem.title}}</p>
  	  			</router-link>
  	  		</div>
  	  		<router-link to="/society">
	  			  <v-more></v-more>
	  		  </router-link>
  	  	</div>
  	  </div>	  
    </div>
  </div>
  
</template>

<script>
import Swiper from '../Swiper/Swiper.vue'
import Scroll from '../Scroll/Scroll.vue'
import More from '../More/More.vue'

export default {
  data () {
  	return {
  	  hotSpotList: [],
  	  politicsList: [],
  	  historyList: [],
  	  newsList: [],
  	  warList: [],
  	  socialList: []
  	}
  },
  components: {
  	'v-swiper': Swiper,
  	'v-more': More
  },
  mounted () {
  	this.hotData(),
  	this.politicsDate(),
  	this.historyDate(),
  	this.newsDate(),
  	this.warfareDate(),
  	this.socialDate()
  },
  methods: {
  	hotData () {
  		let _this = this;
  		this.$http.get('./static/date/hotspot.data').then(function (res){
  			//setTimeout(function (){
  				_this.hotSpotList = res.data;
  				
  				//console.log(_this.hotSpotList)
  			//},1000)
  		}).catch(function (err){
  			console.log(err)
  		})
  	},
  	politicsDate () {
  		let _this = this;
  		this.$http.get('./static/date/politics.data').then(function (res){
  			//setTimeout(function (){
  				_this.politicsList = res.data;
  			//},1000)
  		}).catch(function (err){
  			console.log(err)
  		})
  	},
  	historyDate () {
  		let _this = this;
  		this.$http.get('./static/date/history.data').then(function (res){
  			//setTimeout(function (){
  				_this.historyList = res.data;
  			//},1000)
  		}).catch(function (err){
  			console.log(err)
  		})
  	},
  	newsDate () {
  		let _this = this;
  		this.$http.get('./static/date/news.txt').then(function (res){
  			//setTimeout(function (){
  				_this.newsList = res.data;
  			//},1000)
  		}).catch(function (err){
  			console.log(err)
  		})
  	},
  	warfareDate () {
  		let _this = this;
  		this.$http.get('./static/date/warfare.txt').then(function (res){
  			//setTimeout(function (){
  				_this.warList = res.data;
  			//},1000)
  		}).catch(function (err){
  			console.log(err)
  		})
  	},
  	socialDate () {
  		let _this = this;
  		this.$http.get('./static/date/social.txt').then(function (res){
  			//setTimeout(function (){
  				_this.socialList = res.data;
  			//},1000)
  		}).catch(function (err){
  			console.log(err)
  		})
  	}
  	
  }
  
}
</script>

<style scoped>
.content{
	width: 100%;
	overflow: hidden;
}
.con_head{
	margin-top: 10px;
	width: 100%;
	padding-left: 1.6%;
	height: 35px;
}
.namebar{
	width: 47%;
}
.namebar span{
  padding: 13px 4px;
  background: #0F5CA0;
}
.namebar .title{
	font-size: 20px;
  font-weight: bold;
  padding-left: 4px;
}
.namebar .retitle{
	color: #3d5830;
  line-height: 35px;  
  padding-left: 1px;
  font-size: 12px;
}
.clumnblack{
	width: 53%;
	height: 26px;
	background-color: #e3e2e2;
}
.list{
	padding: 0 1.6%;
}
.list .li_items{
	padding-left: 15px;
	height: 33px;
	line-height: 33px;
	color: #787878;
	border-bottom: 1px dashed #d6d6d6;
	font-size: 16px;
	overflow: hidden;
	background: url(./img/squer.png) no-repeat left center;
	word-wrap: break-word
}
.list .li_items:nth-last-of-type(1){
	border-bottom: none;
}
.list .li_items span{
	color: #000;
}
.picList{
	padding: 0 1.6%;
	font-size: 0px;
	margin-left: 2%;
}
.picList .pic_items{
	display: inline-block;
	width: 31%;
  height: auto;
	margin-top: 5px;
	margin-right: 2%;
}
.picList .pic_items img{
	width: 100%;
	height: 79px;
}
.picList .pic_des{
	  font-size: 14px;
    color: #333;
    margin-top: 5px;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    text-align: center;
}

.tpc_list{
	width: 100%;
	padding: 0 1.6%;
}
.tpc_items{
	margin-top: 10px;
}
.tpc_pic{
	width: 140px;
	height: 92px;
}
.tpc_pic img{
	width: 140px;
	height: 92px;
}
.tpc_t{
	margin-right: 3%;
	margin-left: 150px;
}
.tpc_caption{
	font-size: 18px;
  overflow: hidden;
  font-weight: bold;
  margin-bottom: 8px;
  height: 22px;
  color: #010101;
}
.tpc_des{
	line-height: 22px;
	height: 44px;
  font-size: 14px;
  color: #666;
  margin-bottom: 2px;
  text-indent: 28px;
  overflow: hidden;
}
.tpc_date span{
	color: #959595;
  font-size: 12px;
}
.first{
	padding: 0 1.6%;
}
.first .first_tit{
	font-size: 18px;
  height: 21px;
  overflow: hidden;
  color: #010101;
  font-weight: bold;
}
.first_con{
	margin-top: 10px;
}
.first_pic{
	width: 140px;
	height: 92px;
}
.first_pic img{
	width: 140px;
	height: 92px;
}
.first_des{
	margin-left: 150px;
}
.first_des p{
	line-height: 22px;
  font-size: 16px;
  color: #666;
  text-indent: 32px;
  margin-bottom: 15px;
  height: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

</style>
