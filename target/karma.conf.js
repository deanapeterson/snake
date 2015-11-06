'use strict';

/**
 * The Karma configurations.
 */
module.exports = function(config) {
    config.set({

        basePath: '../',

        frameworks: ['jasmine'],

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: [  'node_modules/lodash/index.js',  'node_modules/grunt-babel/node_modules/babel-core/browser-polyfill.js',  'node_modules/jquery/dist/jquery.js',  'node_modules/angular/angular.js',  'node_modules/angular-touch/angular-touch.js',  'node_modules/angular-animate/angular-animate.js',  'node_modules/angular-ui-router/release/angular-ui-router.js',  'node_modules/fastclick/lib/fastclick.js',  'target/templates-app.js',  'src/app.module.js',  'src/app/home/home.controller.module.js',  'src/app/play/play.controller.module.js',  'src/app/snake-game/snake.module.js',  'src/templates-app.module.js',  'src/app.controller.js',  'src/app/snake-game/barriers/barriers.directive.js',  'src/app/snake-game/configuration.service.js',  'src/app/snake-game/food/food-utils.service.js',  'src/app/snake-game/food/food.service.directive.js',  'src/app/snake-game/game-board/game-board.directive.js',  'src/app/snake-game/game-controller.directive.js',  'src/app/snake-game/game.controller.js',  'src/app/snake-game/key-handlers.service.js',  'src/app/snake-game/levels/level-definitions/level-01.run.js',  'src/app/snake-game/levels/levels.service.js',  'src/app/snake-game/models/game-state.model.js',  'src/app/snake-game/models/snake-state.model.js',  'src/app/snake-game/snake/render-segment.directive.js',  'src/routes.config.js',  'node_modules/angular-mocks/angular-mocks.js', 
        ],

        exclude: [
            'src/assets/**/*.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters: ['progress'],

        // web server port
        port: 9876,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // each of these will need added to your path
        // Chrome: CHROME_BIN, IE: IE_BIN, etc
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // report slow unit tests (half second is our cutoff?)
        reportSlowerThan: 500,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // plugins above and beyond
        plugins: [
            'karma-*'
        ],

        // junit report config
        junitReporter: {
            outputFile: 'target/junit/test-results.xml'
        },
        preprocessors: {
            'src/**/!(*spec).js': ['coverage'],
            'src/**/*.js': ['babel']
        },
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'target/coverage'
            }, {
                type: 'lcov',
                dir: 'target/coverage'
            }, {
                type: 'cobertura',
                dir: 'target/coverage'
            }]
        }
    });
};
