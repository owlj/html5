function enable_tab (element) {
  element.onkeydown = function(e) {
    if (e.keyCode == 9) {
      var val = this.value, start = this.selectionStart, end = this.selectionEnd;
      this.value = val.substring(0, start) + '  ' + val.substring(end);
      this.selectionStart = this.selectionEnd = start + 2;
      return false;
    };
  }
}