// define angular module
// - name of module
// - array of dependencies

angular.module('Eggly', [

])
.controller('MainCtrl', function($scope){
    // $scope is the glue between the controller and the view
    $scope.hello = '02-controllers variable';

    $scope.categories = [
      {id: 0, name: 'Design Tools'},
      {id: 1, name: 'Tool Extensions'},
      {id: 2, name: 'How To'},
      {id: 3, name: 'Colors'},
      {id: 4, name: 'Design Processes'}
    ];// $scope.categories

    $scope.bookmarks = [
      {id: 0, title: 'Google', url: "http://google.com", category: "Design Tools"},
      {id: 1, title: 'Designer News', url: "http://designernews.co", category: "Design Tools"},
      {id: 2, title: 'Hacker News', url: "http://google.com", category: "Tech"},
      {id: 3, title: 'Daring Fireball', url: "http://google.com", category: "Tech"},
      {id: 4, title: 'Apple.com', url: "http://google.com", category: "Inspiration"},
      {id: 5, title: 'Angular.js', url: "http://google.com", category: "Code"},
      {id: 6, title: 'React.js', url: "http://google.com", category: "Code"},
    ];]; // $scope.bookmarks
  }) // .controller
; // .module AngularTutorial