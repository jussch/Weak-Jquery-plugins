$.Zoomable = function(el) {
  this.$el = $(el);
  this.focusSize = 400;

  $el.on('mouseenter', this.showFocusBox());
  $el.on('mouseleave', this.removeFocusBox());
}

$.Zoomable.prototype.showFocusBox = function(event) {
  this.$focusBox = $("<div class='focus-box'></div>");
  
}

$.fn.zoomable = function () {
  return this.each(function () {
    new $.Zoomable(this);
  });
};
