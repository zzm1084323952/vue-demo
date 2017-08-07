<template>
  <div class="scroll">
	<section id="wrapper" class="wrap">
      <div id="scroller">
	     1
	  </div>
	</section>	
  </div>
</template>

<script>
import ISscroll from './js/iscroll.js'
export default{
  methods:{
  	myscroll () {
      var myscroll;
	  function loaded(){
	    myscroll = new IScroll("#wrapper",{
		  mouseWheel: true
		});
	  }
	  document.addEventListener("touchmove",function(ev){
		ev.preventDefault();
	  },false)
	  loaded();
  	}
  },
  mounted () {
  	this.myscroll();
  }
}
</script>

<style scoped>
.wrap{ 
  width: 100%; 
  position: absolute; 
  top: 50px; 
  bottom: 50px; 
  overflow: hidden; 
  z-index: 1;}
#scroller {
    position: absolute;
	z-index: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 100%;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-touch-callout: none;
	-touch-callout:none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;
  }
</style>