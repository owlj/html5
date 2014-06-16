function fade_in (element, ms) { fade(element, true, ms) }
function fade_out (element, ms) { fade(element, false, ms) }

function fade (element, flag, ms) {
  if(ms == null)ms = 400;
  var opacity = 1;
  if(flag){
    opacity = 0;
    element.style.display = 'block';
    element.style.opacity = opacity;
  }
  var interval = 50, gap = interval/ms;
  function func () {
    if (flag) opacity += gap;
    else opacity -= gap;
    element.style.opacity = opacity;
    if (flag) if (opacity >= 1) clearInterval(fading);
    else {
      if (opacity <= 0) {
        clearInterval(fading);
        element.style.display = 'none';
      }
    }
  };
  var fading = window.setInterval(func, interval);
}

function switch_fade (el_in, el_out, ms) {
  el_out.style.display = 'none';
  fade_in(el_in, ms);
}

function reset_form (form, element) {
  form.reset();
  element.focus();
}

function get_value (object) {
  if(object.type == null)return object;
  switch(object.type){
    case "text":
    case "textarea":
    case "hidden":
      return object.value;
    break;
    case "select-one":
      var index = object.selectedIndex;
      return object[index].value;
    break;
  }
  return null;
}