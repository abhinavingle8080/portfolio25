'use strict';

/**
 * Creative Portfolio AngularJS Application
 */
var app = angular.module('portfolioApp', ['ngRoute']);

// Configure routes
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'app/views/about.html',
            controller: 'AboutController'
        })
        .when('/skills', {
            templateUrl: 'app/views/skills.html',
            controller: 'SkillsController'
        })
        .when('/projects', {
            templateUrl: 'app/views/projects.html',
            controller: 'ProjectsController'
        })
        .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
    
    // Use HTML5 history API for clean URLs (without #)
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
}]);

// Run block for initialization
app.run(['$rootScope', function($rootScope) {
    // Set your name here
    $rootScope.yourName = 'Your Name';
    $rootScope.currentYear = new Date().getFullYear();
    
    // Initialize AOS animation library
    angular.element(document).ready(function() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50
        });
    });
    
    // Handle scroll event for navbar
    angular.element(window).bind('scroll', function() {
        if (this.pageYOffset > 50) {
            $rootScope.scrolled = true;
        } else {
            $rootScope.scrolled = false;
        }
        $rootScope.$apply();
    });
}]); 