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
