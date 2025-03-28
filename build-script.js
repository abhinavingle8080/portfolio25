const fs = require('fs-extra');
const path = require('path');

console.log('Building portfolio project...');

// Paths
const buildDir = path.join(__dirname, 'dist');

// Clean dist directory
console.log('Cleaning dist directory...');
fs.emptyDirSync(buildDir);

// Copy necessary files to dist
console.log('Copying files to dist...');

// Copy index.html
fs.copyFileSync(
  path.join(__dirname, 'index.html'),
  path.join(buildDir, 'index.html')
);

// Modify index.html for production
console.log('Optimizing index.html for production...');
let indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

// Remove the base tag which can cause routing issues
indexHtml = indexHtml.replace(/<base href="\/">/, '');

// Add a simple fallback controller for when MainController may not load from external file
const inlineControllerScript = `
<script>
  // Fallback controller in case the external one doesn't load
  angular.module('portfolioApp').controller('MainController', ['$scope', '$location', function($scope, $location) {
    // Basic controller implementation
    $scope.yourName = 'Abhinav Ingle';
    $scope.currentYear = new Date().getFullYear();
    
    // Navigate to home if not already there
    if ($location.path() === '') {
      $location.path('/');
    }
  }]);
</script>`;

// Insert the inline controller before the closing body tag
indexHtml = indexHtml.replace('</body>', inlineControllerScript + '</body>');

// Save the modified index.html
fs.writeFileSync(path.join(buildDir, 'index.html'), indexHtml);

// Copy app directory
fs.copySync(
  path.join(__dirname, 'app'),
  path.join(buildDir, 'app')
);

// Copy server.js for Heroku (if needed)
fs.copyFileSync(
  path.join(__dirname, 'server.js'),
  path.join(buildDir, 'server.js')
);

// Copy netlify.toml (for Netlify deployments)
if (fs.existsSync(path.join(__dirname, 'netlify.toml'))) {
  fs.copyFileSync(
    path.join(__dirname, 'netlify.toml'),
    path.join(buildDir, 'netlify.toml')
  );
}

// Copy robots.txt and sitemap.xml
fs.copyFileSync(
  path.join(__dirname, 'robots.txt'),
  path.join(buildDir, 'robots.txt')
);

fs.copyFileSync(
  path.join(__dirname, 'sitemap.xml'),
  path.join(buildDir, 'sitemap.xml')
);

// Create _redirects file for Netlify (SPA support)
fs.writeFileSync(
  path.join(buildDir, '_redirects'),
  '/* /index.html 200'
);

console.log('Build completed successfully!');
console.log('');
console.log('For Netlify deployment:');
console.log('1. Set the publish directory to "dist"');
console.log('2. No build command needed if building locally');
console.log('');
console.log('For Heroku deployment:');
console.log('1. Make sure the Procfile points to "web: node server.js"');
console.log('2. The heroku-postbuild script will run this build automatically'); 