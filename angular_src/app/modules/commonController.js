'use strict';

angular.module('mainModule') 
  .controller('commonController', function ($scope) {

    $scope.categories = {
      schedule: {
        name: 'home',
        displayedName: 'Home',
        state: 'landing',
        subCategories: {}
      },
      operation: {
        name: 'contact',
        displayedName: 'Contact',
        state: 'landing',
        subCategories: {}
      }
    };

  });