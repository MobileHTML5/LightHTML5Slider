/*
referers : https://github.com/cubiq/iscroll/blob/master/src/utils.js
*/


function addClass(el, cls) {
  var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
  if (!reg.test(el.className)) {
    el.className += " " + cls;
  }
}
function removeClass(el, cls) {
  var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
  el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
}
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

// or use classList

// Adding a class
element.classList.add("bar");
// Removing a class
element.classList.remove("foo");
// Checking if has a class
element.classList.contains("foo");
// Toggle a class
element.classList.toggle("active");


var _elementStyle = document.createElement('div').style;
var _vendor = (function () {
	var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
		transform,
		i = 0,
		l = vendors.length;

	for ( ; i < l; i++ ) {
		transform = vendors[i] + 'ransform';
		if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
	}

	return false;
})();

function _prefixStyle (style) {
	if ( _vendor === false ) return false;
	if ( _vendor === '' ) return style;
	return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
