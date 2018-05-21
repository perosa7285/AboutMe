var app = angular.module('myApp', [])
      app.config(function($sceDelegateProvider) {
         $sceDelegateProvider.resourceUrlWhitelist([
              'https://corpseweed.000webhostapp.com/**'
        ]);
      });