// Karma configuration
// Generated on Sun Nov 20 2016 03:23:20 GMT+0530 (India Standard Time)
var istanbul = require('browserify-istanbul');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify','jasmine'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {      
      'app/**/*.js': ['browserify'],
      'app/**/*.html': ['ng-html2js']
    },


    // list of files / patterns to load in the browser
    files: [
      'app/app.js',
      'app/**/*.js',
      'node_modules/angular/angular.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'node_modules/requirejs/require.js',
      'js/angular_1_router.js',
      'js/*.js',
      'test/**/*.js',
      'app/**/*.html',

      // fixtures
      {pattern: 'test/mock/*.json', watched: true, served: true, included: false}
    ],


    // list of files to exclude
    exclude: [
    ],

    browserify: {
      debug: true,
      transform: [ 
        'brfs',
        istanbul({
          ignore: ['**/js/*.js',
                    '**/app/app.js'
                  ]
        })
      ]
    },    


    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: '',
      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-browserify',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    coverageReporter: {
        dir: 'test-results/coverage/',
        reporters: [
            {type: 'text', subdir: 'text'},
            {type: 'text', file: 'summary.txt', subdir: 'text'}        
        ],
        instrumenterOptions: {
            istanbul: { noCompact: true }
      }

    },

    junitReporter: {
      outputFile: 'test-results/junit/unit.xml',
      suite: 'unit'
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
