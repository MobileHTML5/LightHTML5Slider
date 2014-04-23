function removeClass(el, cls) {
  var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
  el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
}
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}
