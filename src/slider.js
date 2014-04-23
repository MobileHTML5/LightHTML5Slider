/**
 * <div class="lslider">
	<div class="lslider-images">
		<a href=""><img src="" alt=""></a>
		<a href=""><img src="" alt=""></a>
		<a href=""><img src="" alt=""></a>
	</div>

	<div class="lsider-title"></div>
	<div class="lslider-indicator">
		<span class="lactvie"></span>
		<span></span>
		<span></span>
	</div>
</div>
*/


function Slider(id) {
  
  this.container = document.getElementById(id);
  this.imagesbox = this.container.querySelector('.lslider-images');
  this.titlebox = this.container.querySelector('.lslider-title');
  this.indicatorbox = this.container.querySelector('.lslider-indicator');
  
}
