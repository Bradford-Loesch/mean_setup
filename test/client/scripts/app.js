//    Main entry point, initializing app; configuring ng-route

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider.when("/",{
        templateUrl:"partials/main.html"
        // other partial routes for index go here!
    });

    //other partials for other Routes go here

});
