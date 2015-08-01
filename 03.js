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
      {id: 3, name: 'code'},
      {id: 4, name: 'codeschool'}
    ]; // $scope.categories

    $scope.bookmarks = [
      {id: 0, title: 'Google', url: "http://google.com", category: "Design Tools"},
      {id: 1, title: 'Designer News', url: "http://designernews.co", category: "Design Tools"},
      {id: 2, title: 'Hacker News', url: "http://google.com", category: "Tech"},
      {id: 3, title: 'Daring Fireball', url: "http://google.com", category: "Tech"},
      {id: 4, title: 'Apple.com', url: "http://google.com", category: "Inspiration"},
      {id: 5, title: 'Angular.js', url: "http://google.com", category: "Code"},
      {id: 6, title: 'React.js', url: "http://google.com", category: "Codeschool"},
    ]; // $scope.bookmarks

    $scope.currentCategory = null;

    function setCurrentCategory(category){
      $scope.currentCategory = category; // take the clicked on category and assign it to setCurrentCategory
      console.log(category); // clicking grabs the category of the link
    } // function setCurrentCategory

    function isCurrentCategory(category){
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    $scope.setCurrentCategory = setCurrentCategory;   
    $scope.isCurrentCategory = isCurrentCategory; 
  }) // .controller
; // .module AngularTutorial