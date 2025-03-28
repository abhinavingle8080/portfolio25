'use strict';

/**
 * Custom Directives for Portfolio
 */

// Animation on scroll directive
app.directive('animateOnScroll', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var elementPosition = element[0].getBoundingClientRect().top;
            var offset = attrs.offset || 150;
            var delay = attrs.delay || 0;
            var duration = attrs.duration || 500;
            
            angular.element($window).bind('scroll', function() {
                var scrollPosition = this.pageYOffset;
                
                if (scrollPosition > elementPosition - $window.innerHeight + parseInt(offset)) {
                    setTimeout(function() {
                        element.addClass('animate-fade-in');
                        element.css('animation-duration', duration + 'ms');
                    }, delay);
                }
            });
        }
    };
}]);

// Terminal text effect directive
app.directive('terminalText', ['$timeout', '$rootScope', function($timeout, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            text: '@',
            prompt: '@',
            typingSpeed: '@',
            startDelay: '@',
            lineIndex: '@'
        },
        link: function(scope, element, attrs) {
            var text = scope.text || 'Hello, World!';
            var prompt = scope.prompt || '>';
            var typingSpeed = parseInt(scope.typingSpeed) || 50;
            var startDelay = parseInt(scope.startDelay) || 1000;
            var lineIndex = parseInt(scope.lineIndex) || 0;
            
            // Initialize terminal line counter in rootScope if not exists
            if (!$rootScope.terminalLineComplete) {
                $rootScope.terminalLineComplete = [-1]; // Start with -1 to allow first line to start
            }
            
            element.html('<span class="prompt">' + prompt + '</span> <span class="typed-text"></span><span class="cursor">|</span>');
            var typedTextElement = element.find('.typed-text');
            
            // Check if this line should start typing
            var checkLineStatus = function() {
                if ($rootScope.terminalLineComplete[$rootScope.terminalLineComplete.length - 1] >= lineIndex - 1) {
                    // Previous line is complete, start typing this one
                    startTyping();
                } else {
                    // Check again after a delay
                    $timeout(checkLineStatus, 100);
                }
            };
            
            // Start the typing animation
            var startTyping = function() {
                // Add active-line class to show cursor
                element.addClass('active-line');
                
                var i = 0;
                var typeInterval = setInterval(function() {
                    if (i < text.length) {
                        typedTextElement.append(text.charAt(i));
                        i++;
                    } else {
                        clearInterval(typeInterval);
                        // Mark this line as complete
                        $rootScope.terminalLineComplete.push(lineIndex);
                        
                        // Remove active-line class to hide cursor when done
                        $timeout(function() {
                            element.removeClass('active-line');
                        }, 500);
                    }
                }, typingSpeed);
            };
            
            // Start the process
            $timeout(function() {
                if (lineIndex === 0) {
                    // First line starts after initial delay
                    startTyping();
                } else {
                    // Other lines wait for their turn
                    checkLineStatus();
                }
            }, lineIndex === 0 ? startDelay : 0);
        }
    };
}]);

// Code highlight directive
app.directive('codeHighlight', function() {
    return {
        restrict: 'A',
        scope: {
            language: '@',
            code: '@'
        },
        template: '<div class="code-snippet">' +
                    '<span class="language">{{language}}</span>' +
                    '<pre><code ng-bind-html="highlightedCode"></code></pre>' +
                  '</div>',
        link: function(scope, element, attrs) {
            scope.language = scope.language || 'javascript';
            
            // Simple syntax highlighting for demo
            scope.highlightCode = function(code, language) {
                // This is a simplified version of syntax highlighting
                // In a real application, you might want to use a library like highlight.js
                
                var highlighted = code;
                
                if (language === 'javascript' || language === 'js') {
                    // Keywords
                    highlighted = highlighted.replace(/(var|const|let|function|return|if|else|for|while|switch|case|break|continue|new|this|class)\b/g, '<span class="code-keyword">$1</span>');
                    
                    // Functions
                    highlighted = highlighted.replace(/(\w+)(\s*\()/g, '<span class="code-function">$1</span>$2');
                    
                    // Strings
                    highlighted = highlighted.replace(/(["'])(.*?)\1/g, '<span class="code-string">$1$2$1</span>');
                    
                    // Numbers
                    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');
                    
                    // Comments (simplified, doesn't handle all cases)
                    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>');
                }
                
                // Format the code to display line breaks properly
                highlighted = highlighted.replace(/\n/g, '</span><span class="code-line">');
                highlighted = '<span class="code-line">' + highlighted + '</span>';
                
                return highlighted;
            };
            
            scope.$watch('code', function(newValue) {
                if (newValue) {
                    scope.highlightedCode = scope.highlightCode(newValue, scope.language);
                }
            });
        }
    };
});

// Parallax effect directive
app.directive('parallaxBackground', ['$window', function($window) {
    return {
        restrict: 'A',
        scope: {
            parallaxRatio: '@'
        },
        link: function(scope, element, attrs) {
            var parallaxRatio = scope.parallaxRatio || 0.5;
            var initialTop = element.prop('offsetTop');
            
            angular.element($window).bind('scroll', function() {
                var scrollTop = this.pageYOffset;
                var elementTop = initialTop - scrollTop;
                var parallaxOffset = elementTop * parallaxRatio;
                
                element.css('background-position-y', parallaxOffset + 'px');
            });
        }
    };
}]);

// Tooltip directive
app.directive('customTooltip', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            tooltipText: '@',
            tooltipPosition: '@'
        },
        link: function(scope, element, attrs) {
            // Create tooltip element
            var tooltip = angular.element('<div class="custom-tooltip">' + scope.tooltipText + '</div>');
            var position = scope.tooltipPosition || 'top';
            
            tooltip.addClass('tooltip-' + position);
            
            // Append tooltip to body
            angular.element(document.body).append(tooltip);
            
            // Show tooltip on hover
            element.on('mouseenter', function() {
                var rect = element[0].getBoundingClientRect();
                var tooltipWidth = tooltip[0].offsetWidth;
                var tooltipHeight = tooltip[0].offsetHeight;
                
                var top, left;
                
                switch (position) {
                    case 'top':
                        left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                        top = rect.top - tooltipHeight - 10;
                        break;
                    case 'bottom':
                        left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                        top = rect.bottom + 10;
                        break;
                    case 'left':
                        left = rect.left - tooltipWidth - 10;
                        top = rect.top + (rect.height / 2) - (tooltipHeight / 2);
                        break;
                    case 'right':
                        left = rect.right + 10;
                        top = rect.top + (rect.height / 2) - (tooltipHeight / 2);
                        break;
                }
                
                // Adjust position to stay within viewport
                top = Math.max(10, top);
                left = Math.max(10, left);
                left = Math.min(left, document.body.clientWidth - tooltipWidth - 10);
                
                tooltip.css({
                    top: top + 'px',
                    left: left + 'px',
                    opacity: 1,
                    visibility: 'visible'
                });
            });
            
            // Hide tooltip on mouse leave
            element.on('mouseleave', function() {
                tooltip.css({
                    opacity: 0,
                    visibility: 'hidden'
                });
            });
            
            // Clean up on destroy
            scope.$on('$destroy', function() {
                tooltip.remove();
            });
        }
    };
}]);

// Circular progress directive
app.directive('circularProgress', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            progress: '@',
            size: '@',
            strokeWidth: '@',
            circleColor: '@',
            progressColor: '@',
            textColor: '@',
            duration: '@'
        },
        template: '<div class="circular-progress">' +
                    '<svg viewBox="0 0 {{size}} {{size}}"></svg>' +
                    '<div class="progress-text">{{progress}}%</div>' +
                  '</div>',
        link: function(scope, element, attrs) {
            var size = parseInt(scope.size) || 500;
            var strokeWidth = parseInt(scope.strokeWidth) || 25;
            var circleColor = scope.circleColor || 'rgba(52, 152, 219, 0.1)';
            var progressColor = scope.progressColor || '#3498db';
            var textColor = scope.textColor || '#333';
            var duration = parseInt(scope.duration) || 1500;
            
            // Set text color
            element.find('.progress-text').css('color', textColor);
            
            // Create SVG elements
            var svg = element.find('svg');
            
            var radius = (size / 2) - (strokeWidth / 2);
            var circumference = 2 * Math.PI * radius;
            
            // Background circle
            var backgroundCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            angular.element(backgroundCircle).attr({
                cx: size / 2,
                cy: size / 2,
                r: radius,
                fill: 'none',
                stroke: circleColor,
                'stroke-width': strokeWidth
            });
            
            // Progress circle
            var progressCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            angular.element(progressCircle).attr({
                cx: size / 2,
                cy: size / 2,
                r: radius,
                fill: 'none',
                stroke: progressColor,
                'stroke-width': strokeWidth,
                'stroke-dasharray': circumference,
                'stroke-dashoffset': circumference,
                transform: 'rotate(-90, ' + (size / 2) + ', ' + (size / 2) + ')'
            });
            
            svg.append(backgroundCircle);
            svg.append(progressCircle);
            
            // Animate progress
            $timeout(function() {
                var progress = parseInt(scope.progress) || 0;
                var offset = circumference - (progress / 100 * circumference);
                
                angular.element(progressCircle).css({
                    'stroke-dashoffset': offset,
                    'transition': 'stroke-dashoffset ' + duration + 'ms ease-in-out'
                });
            }, 100);
        }
    };
}]); 