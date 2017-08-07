<template>
  <div class="gallery">
  	<div class="galleryList">
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="galleryItems">
  			<img src="./img/g_1.png" />
  			<p class="gDes">盘点世界十大最恐怖的</p>
  		</div>
  		<div class="moreBar">
  	    <i class="moreIcons">
  	      <img src="./img/more_icons.png" />
  	    </i>
  	    <p class="moret">向下展开</p>
  	  </div>
  	</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.galleryList{
	margin-top: 15px;
	padding: 0 1.6%;
}
.galleryList .galleryItems{
	display: inline-block;
	width: 49%;
}
.galleryList .galleryItems img{
	width: 100%;
	height: 118px;
}
.galleryList .galleryItems .gDes{
	text-align: center;
  color: #555;
  font-size: 14px;
  margin-top: 5px;
  height: 15px;
  line-height: 15px;
  overflow: hidden;
}
.moreBar{
  width: 100%;
  margin: 10px 0 10px 0;
  text-align: center;
}
.moreIcons img{
  width: 42px; 
  height: 44px;
}
.moret{
  font-size: 14px;
  color: #777;
}
</style>