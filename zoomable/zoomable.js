$.Zoomable = function(el) {
  this.$el = $(el);
  this.focusSize = 400;
  this.$focusBox = $('.focus-box')

  $('div.zoomable').on('mouseenter', this.showFocusBox.bind(this));
  $('div.zoomable').on('mousemove', this.moveFocusBox.bind(this));
  $('div.zoomable').on('mouseleave', this.removeFocusBox.bind(this));
};

$.Zoomable.prototype.showFocusBox = function(event) {
  this.$focusBox = $("<div class='focus-box'></div>");
  this.$el.append(this.$focusBox);
  this.showZoom();
};

$.Zoomable.prototype.moveFocusBox = function(event) {
  this.$focusBox.css('left',event.pageX);
  this.$focusBox.css('top', event.pageY);
  // var xDiff = -9.33 * (event.pageX - 50);
  // var yDiff = -9.33 * (event.pageY - 50);
  // this.$zoomedImage.css('background-position', xDiff + "px "+ yDiff+ "px")
  var xDiff = (event.pageX - 50) / 2.0;
  var yDiff = (event.pageY - 50) / 0.9;
  this.$zoomedImage.css('background-position', xDiff + "% "+ yDiff+ "%")
};

$.Zoomable.prototype.removeFocusBox = function(event) {
  this.$focusBox.remove();
  this.$focusBox = null;
  this.$zoomedImage.remove();
  this.$zoomedImage = null;
};

$.Zoomable.prototype.showZoom = function() {
  this.$zoomedImage = $('<div class="zoomed-image"></div>');
  this.$zoomedImage.css('width', $(window).height()-5);
  this.$zoomedImage.css('height', $(window).height()-5);
  this.$zoomedImage.css('background-image', 'url('+$('div.zoomable img').attr('src')+')');
  this.$zoomedImage.css('background-size', '300%');

  $('body').append(this.$zoomedImage);
};

$.fn.zoomable = function () {
  return this.each(function () {
    new $.Zoomable(this);
  });
};
