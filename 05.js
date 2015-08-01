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

      cancelCreating(); // to escape editing and creating when changing categories
      cancelEditing();
    } // function setCurrentCategory
    function isCurrentCategory(category){
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }
    $scope.setCurrentCategory = setCurrentCategory;   
    $scope.isCurrentCategory = isCurrentCategory;



    // CRUD
    // CREATE
    function resetCreateForm () {
      $scope.newBookmark = {
        title: '',
        url: '',
        category: $scope.currentCategory.name
      }
    }
    function createBookmark(bookmark){
      bookmark.id = $scope.bookmarks.length; 
      $scope.bookmarks.push(bookmark);

      resetCreateForm();
    }
    $scope.createBookmark = createBookmark;

    // EDIT
    $scope.editedBookmark = null;
    
    function setEditedBookmark (bookmark) {
      $scope.editedBookmark = angular.copy(bookmark);
    }

    function updateBookmark(bookmark) {
      var index = _.findIndex($scope.bookmarks, function (b) {
        return b.id == bookmark.id;
      });
      $scope.bookmarks[index] = bookmark;
      $scope.editedBookmark = null;
      $scope.isEditing = false;

    }

    function isSelectedBookmark (bookmarkId) {
      return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
    }
    $scope.setEditedBookmark = setEditedBookmark;
    $scope.updateBookmark = updateBookmark;
    $scope.isSelectedBookmark = isSelectedBookmark;

    // DELETE
     function deleteBookmark (bookmark) {
      _.remove($scope.bookmarks, function (b) {
        return b.id == bookmark.id; // when deleteBookmark is called, pass in the bookmark, get the ID of the selected bookmark, then erase it from the bookmark array
      });
    }
    $scope.deleteBookmark = deleteBookmark;


    // CREATING AND EDITING STATES
    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating(){
      $scope.isCreating = true;
      $scope.isEditing = false;
      resetCreateForm();
    }

    function cancelCreating() {
      $scope.isCreating = false;
    }

    function startEditing(){
      $scope.isCreating = false;
      $scope.isEditing = true;
    }

    function cancelEditing() {
      $scope.isEditing = false;
    }

    function shouldShowCreating () {
      return $scope.currentCategory && !$scope.isEditing;
    }

    function shouldShowEditing () {
      return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;

  }) // .controller
; // .module AngularTutorial