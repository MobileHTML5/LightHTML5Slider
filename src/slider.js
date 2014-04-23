/**
<div class="lslider">
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


function Slider(id, data) {
  
  this.container = document.getElementById(id);
  this.imagesbox = this.container.querySelector('.lslider-images');
  this.titlebox = this.container.querySelector('.lslider-title');
  this.indicatorbox = this.container.querySelector('.lslider-indicator');
  this.whRatio = 4/3;
  this.width = this.container.offsetWidth;
  this.height = parseInt(this.width / this.width);
  
	this.activeIndicatorCls = 'lactive';
	this.steps = this.container.offsetWidth;
	this.left = 0;
	this.visible = 1;
	this.margin = 0;
	this.curIndex = 0;
	this.duration = 300;
	this.loop = false;
	this.play = true;
	this.interval = 5000;
	

	
	this.callback = null;
	
  this.pages = data.length;
	this.minpage = 0;
	this.maxpage = this.pages - 1;
	
	if(this.useTransform){
    this.container.style.webkitTransform = 'translate3d(0,0,0)'; //防止ios6下滑动会有顿感
    this.imagesbox.style.webkitBackfaceVisibility = 'hidden';
	}
	
	for(var i =0;i<this.imagesbox.children.length;i++) {
    this.imagesbox.children[i].style.width = this.width + 'px';
    this.imagesbox.children[i].style.height = this.height + 'px';
	}
	this.container.style.width = this.width + 'px';
	this.container.style.height = this.height + 'px';
	
	
	//this.triggers = this.indicatorbox.children;
	//this.triggerSel = this.triggers[this.curIndex];
	this.initEvent();

}

Slider.prototype = {
    has3d: css3.has3d(),
    gv1: function () {
        return this.has3d ? 'translate3d(' : 'translate(';
    }(),
    gv2: function () {
        return this.has3d ? ',0)' : ')';
    }(),
    useTransform: function() {
        return !/android/i.test(navigator.userAgent);
    }()
    
    
    
    
    
}
