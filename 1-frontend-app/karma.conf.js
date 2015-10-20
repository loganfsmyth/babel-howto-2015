module.exports = function(config){
    config.set({
        browsers: ['Chrome'],
        frameworks: ['mocha', 'browserify'],
        files: [
            'test/**/*.js'
        ],
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },
        browserify: {
            watch: true,
            debug: true
        }
    });
};
