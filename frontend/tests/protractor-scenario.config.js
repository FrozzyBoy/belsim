
// conf.js
exports.config = {
    capabilities: {
        'browserName': 'chrome',
        'loggingPrefs': {
            'browser': 'SEVERE'
        }
    },

    //seleniumPort: 8301,
    directConnect: true,
    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine',

    specs: [
        'scenarios/simple-scenario.js',
        'scenarios/out-scenario.js'
    ]
}