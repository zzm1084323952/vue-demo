<template>
	<div class="details">
		<div class="detailsCon">
			<div class="headTit clearfix">
				<span></span>
				<h2>{{myDate.title}}</h2>
			</div>
			<div class="newsTime">
				<span>{{myDate.time}}</span>
			</div>
			<div class="mainC">
				<p>{{myDate.description}}</p>
				<img :src="myDate.img" />
				<p>{{myDate.content}}</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {
			myDate:[]
		}
	},
	methods:{
		ch (){
		    var a = JSON.parse(this.$route.query.Date)
		    this.myDate = a;
		},
		myF (){
			this.myDate = null;
		}
	},
    mounted(){
    	this.ch()
    }
}
</script>

<style scoped>
.detailsCon{
    width: 100%;
    overflow: hidden;
	margin-top: 15px;
}
.headTit span{
	float: left;
    padding: 11px 3px;
    background: #0F5CA0;
}
.headTit h2{
	width: 94%;
    float: left;
    font-size: 22px;
    line-height: 24px;
    padding-left: 5px;
    font-weight: bolder;
}
.newsTime{
	padding-left: 2%;
    margin-top: 10px;
}
.newsTime span{
	margin-right: 4px;
    font-size: 12px;
    color: #909090;
}
.mainC{
	padding: 0 1.6%;
}
.mainC p{
	line-height: 26px;
    margin: 10px 0;
    font-size: 16px;
    color: #333;
    text-indent: 32px;
}
.mainC img{
	width: 80%;
	height: 200px;
	vertical-align: middle;
	margin-left: 9%;
}
</style>
