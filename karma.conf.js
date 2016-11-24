// Karma configuration
// Generated on Thu Nov 24 2016 00:16:05 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './app',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify','jasmine'],

    preprocessors: {
        'app.js': ['browserify'],
        'test/*.js': ['browserify'],
        '*.js': ['coverage'],
    },


    // list of files / patterns to load in the browser
    files: [
        '*.js',
        'test/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     

    browserify: {
      debug: true,
      transform: [ 
        'brfs'
      ]
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
    browsers: ['Chrome','PhantomJS'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-browserify',
      'karma-coverage'
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
