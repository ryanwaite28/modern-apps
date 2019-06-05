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

  $scope.apps = [
    {
      "name": "DeliverMe",
      "desc": "Delivery Platform: Deliver things for people; become your own post man/woman!",
      "icon": "https://rmw-deliverme.herokuapp.com/static/media/deliverme-banner.jpg",
      "link": "https://rmw-deliverme.herokuapp.com/"
    },
    {
      "name": "Blue World",
      "desc": "Selling Platform: Don't give it away, just lend it!",
      "icon": "https://rmw-blueworld.herokuapp.com/vault/images/blueworld-wallpaper-2.png",
      "link": "https://rmw-blueworld.herokuapp.com/"
    },
    {
      "name": "Task Tracker Plus",
      "desc": "Productivity: A To-Do List, but a little better!",
      "icon": "https://rmw-task-tracker-plus.herokuapp.com/static/img/yrd6t.jpg",
      "link": "https://rmw-task-tracker-plus.herokuapp.com/"
    },
    {
      "name": "Epsity",
      "desc": "Social Productivity: Connect with the right people!",
      "icon": "https://rmw-epsity.herokuapp.com/bin/img/fistbump-1.jpg",
      "link": "https://rmw-epsity.herokuapp.com/"
    },
    {
      "name": "Live Time",
      "desc": "Social Productivity: Where Artists and Venues meet!",
      "icon": "https://live-time.herokuapp.com/static/img/concert-wallpaper.jpeg",
      "link": "https://live-time.herokuapp.com/"
    },
    {
      "name": "SafeStar",
      "desc": "Utility: Info Repository: Never lose your assets!",
      "icon": "https://rmw-safestar.herokuapp.com/img/cloud-4.png",
      "link": "https://rmw-safestar.herokuapp.com/"
    },
    {
      "name": "Travellrs",
      "desc": "Social: Record and share your travels!",
      "icon": "https://rmw-travellrs-two.herokuapp.com/static/img/world-wallpaper.png",
      "link": "https://rmw-travellrs-two.herokuapp.com/"
    },
    {
      "name": "World News",
      "desc": "News: From The People, To The People",
      "icon": "https://rmw-world-news.herokuapp.com/vault/images/political-earth-2.jpg",
      "link": "https://rmw-world-news.herokuapp.com/"
    },
    {
      "name": "Vepolus API",
      "desc": "API: Server-Side tools for Client-Side needs!",
      "icon": "https://rmw-vepolus.herokuapp.com/img/api-wallpaper-2.png",
      "link": "https://rmw-vepolus.herokuapp.com/"
    }
  ]

}]);
