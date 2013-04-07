// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browserify2');
    grunt.loadNpmTasks('grunt-browserify2');

    grunt.initConfig({
        watch: {
            compass: {
                files: ['src/styles/**/*.scss'],
                tasks: ['compass']
            },
            jst: {
                files: ['src/templates/**/*.tmpl'],
                tasks: ['jst']
            },
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: 'browserify2'
            }
        },

        browserify2: {
            dev: {
                entry: './src/scripts/app.js',
                compile: './public/scripts/app.js',
                debug: true
            }
        },

        jst: {
            compile: {
                options: {
                    namespace: 'App.tmpl',
                    prettify: true,
                    amdWrapper: false,
                    processName: function(filename) {
                        var fullName = filename.split('src/templates/');
                        var changedName = fullName[1].replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
                        return changedName.replace('.tmpl', '');
                    }
                },
                files: {
                    "public/scripts/templates.js": ["src/templates/**/*.tmpl"]
                }
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: 'src/styles',
                    cssDir: 'public/styles',
                    imagesDir: 'public/styles/assets/images',
                    javascriptsDir: 'public/scripts',
                    fontsDir: 'public/styles/assets/fonts',
                    environment: 'dev',
                    outputStyle: 'expanded',
                    relativeAssets: true
                }
            }
        },

        concat: {

        }
    });

    grunt.registerTask('default', ['watch']);

    grunt.registerTask("debug", ['jst', 'concat']);

    // The release task will run the debug tasks and then minify the
    // dist/debug/require.js file and CSS files.
    grunt.registerTask("release", ['debug', 'min']);
};
