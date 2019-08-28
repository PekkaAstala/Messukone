"use strict";

/* Controllers */

angular.module("myApp.controllers", []).controller("MainCtrl", [
  "$scope",
  "$http",
  "$sce",
  function(scope, http, sce) {
    scope.updateHtml = function() {
      scope.editData.facts = sce.trustAsHtml(scope.editData.factsTinyMCE);
    };

    http.get("data.js").success(function(data) {
      scope.editData = {
        name: "Linnun nimi",
        factsTinyMCE:
          "<ul> <li>FAKTA 1</li> <li>FAKTA 2</li> <li>FAKTA 3</li> <li>FAKTA 4</li> <li>FAKTA 5</li> <li>FAKTA 6</li> </ul>",
        facts: ""
      };
      scope.species = data;
      scope.currentBirdIndex = 0;
    });

    scope.left = function() {
      if (scope.currentBirdIndex == 0) {
        scope.currentBirdIndex = scope.species.length - 1;
      } else {
        scope.currentBirdIndex--;
      }
    };

    scope.right = function() {
      if (scope.currentBirdIndex == scope.species.length - 1) {
        scope.currentBirdIndex = 0;
      } else {
        scope.currentBirdIndex++;
      }
    };
  }
]);
