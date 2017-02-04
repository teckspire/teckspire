window.theme = window.theme || {};

theme.init = function() {
  theme.asideInit(); // initialize aside functionality
};

theme.asideInit = function () {
  theme.leftAside = new theme.Aside('aside', 'left');
};

theme.Aside = (function(){
  var Aside = function (id, position, options){
    var settings = {
      asideOpen: 'js-aside-open',
      asideOpenClass: '.js-aside-open-' + position
    };

    this.position = position;
    this.id = '#' + id;
    this.config = $.extend(settings, options);
    this.init()
  };
  Aside.prototype.toggle = function(e){
    var openState = this.config.asideOpen + ' ' + this.config.asideOpen + '-' + this.position
    $('html, body').toggleClass(openState);
  };

  Aside.prototype.init = function(){
    $(this.config.asideOpenClass).on('click', $.proxy(this.toggle, this));
  };

  return Aside;
})();



// Initialize Theme's JS on docready
$(theme.init)
