angular.module("AngularTutorial", [

])
.controller('NotesCtrl', function($scope){
    $scope.notes = [
      {id: 0, practicedPage: '01-ng-model.html', topic: '01 ng-model', topicDescription: 'add Angular to page; create variables; connect input to data model; ng-app, ng-init, ng-model', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-bootstrapping' },
      {id: 1, practicedPage: '02a-ng-controller.html', topic: '02a ng-controller', topicDescription: 'connecting a page with an ng-controller', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-controllers' },
      {id: 2, practicedPage: '02b-ng-repeat.html', topic: '02b ng-repeat', topicDescription: 'loop through data with ng-repeat', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-controllers' },
      {id: 3, practicedPage: '03-ng-click.html', topic: '03 ng-click', topicDescription: 'filter links with ng-click, apply classes with ng-class', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-filters' },
      {id: 4, practicedPage: '04a-ng-if.html', topic: '04a ng-if', topicDescription: 'toggle create and edit states with ng-if', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-simple-states' },
      {id: 5, practicedPage: '04b-ng-model.html', topic: '04b ng-model', topicDescription: 'use ng-model to create a bookmark', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-add-a-bookmark-with-ng-submit-and-ng-model' },
      {id: 6, practicedPage: '04c-angular-copy.html', topic: '04c edit', topicDescription: 'use ng-model to edit a bookmark', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-temporary-state-for-editing-an-object-with-ng-model-and-a-controller' },
      {id: 7, practicedPage: '05-remove.html', topic: '05 remove', topicDescription: 'how to remove bookmarks; use ng-click or ng-submit to call methods', source: 'https://egghead.io/lessons/angularjs-building-an-angular-app-deleting-a-bookmark' },
    ]; // $scope.notes

  }) // .controller
; // .module AngularTutorial