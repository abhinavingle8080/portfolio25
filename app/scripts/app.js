'use strict';

/**
 * Angular Application Configuration
 */
var app = angular.module('portfolioApp', ['ngRoute']);

/**
 * Configure routes
 */
app.config(['$routeProvider', function($routeProvider) {
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
}]);

/**
 * Run block - executes on application initialization
 */
app.run(['$rootScope', 'ThemeService', function($rootScope, ThemeService) {
    // Initialize theme
    ThemeService.initTheme();
    
    // Set global variables
    $rootScope.appName = 'Developer Portfolio';
    
    // Initialize AOS animations
    document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    });
}]); 