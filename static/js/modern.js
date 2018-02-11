$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax-window').parallax({imageSrc: '/static/img/wallpaper-4.png'});

  var nav = $('#navigate');
  var nav_logo = $('#nav-logo');

  var top_arrow = $('#top-arrow');
  var bottom_arrow = $('#bottom-arrow');

  var height = $(window).height();
  var point = height / 3;
  var start_top = $(window).scrollTop();

  function watchNavPosition(top) {
    if( top > point ) {
      nav.addClass('black').addClass('white-underline').removeClass('bg-clear')
      nav_logo.removeClass('ghost');
    }
    else {
      nav.removeClass('black').removeClass('white-underline').addClass('bg-clear');
      nav_logo.addClass('ghost');
    }
  }

  watchNavPosition(start_top);

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    watchNavPosition(top);
  });
});

const App = angular.module('modernApp', []);

App.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('((');
	$interpolateProvider.endSymbol('))');
}]);

App.controller('modernCtrl', ['$scope', function($scope){

  $scope.back_to_top = function() {
    $('html, body').animate({
      scrollTop: 0 // $("#sdl").offset().top
    }, 1000);
  }
  $scope.go_to_footer = function() {
    $('html, body').animate({
      scrollTop: $('body').height() // $("#sdl").offset().top
    }, 1000);
  }

  fetch('https://ryanwaite28.github.io/modern/modern-data.json')
  .then(function(resp){ return resp.json() })
  .then(function(resp){
    console.log(resp);
    $scope.apps = resp.apps;
    $scope.$apply();
  })

}]);
