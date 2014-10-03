var paths = {
    source: "public/",
    build: "build/",
    css_dest: 'public/stylesheets/css/',
    css_src: 'public/stylesheets/sass/',
    js_src: 'public/js/',
    js_dest: 'source/assets/javascripts/'
};
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        nodewebkit: {
            options: {
                    version: '0.10.1',
                    platforms: ['win', 'osx'],
                    buildDir: './webkitbuilds' // Where the build version of my node-webkit app is saved
            },
            src: ['./ls-seed/**/*'] // Your node-webkit app
        },
        copy: {
            toApp: {
                files: [
                    {
                        expand: true,
                        cwd: './public',
                        src: ['**/*'],
                        dest: './ls-seed/public'
                    },
                    {
                        expand: true,
                        cwd: './index.html',
                        src: ['**/*'],
                        dest: './ls-seed/index.html'
                    },
                    {
                        expand: true,
                        cwd: './package.json',
                        src: ['**/*'],
                        dest: './ls-seed/package.json'
                    },
                    {
                        expand: true,
                        cwd: './skull-icon.png',
                        src: ['**/*'],
                        dest: './ls-seed/skull-icon.png'
                    },
                    {
                        expand: true,
                        cwd: './VERSION',
                        src: ['**/*'],
                        dest: './ls-seed/VERSION'
                    },
                    {
                        expand: true,
                        cwd: './Info.plist',
                        src: ['**/*'],
                        dest: './ls-seed/Info.plist'
                    },
                    {
                        expand: true,
                        cwd: './README.md',
                        src: ['**/*'],
                        dest: './ls-seed/README.md'
                    },
                    {
                        expand: true,
                        cwd: './app.ico',
                        src: ['**/*'],
                        dest: './ls-seed/app.ico'
                    }                    
                ]
            }
        },
        clean: {
            build: [
                "webkitbuilds",
                "./ls-seed/public",
                "./ls-seed/index.html",
                "./ls-seed/package.json",
                "./ls-seed/skull-icon.png",
                "./ls-seed/VERSION",
                "./ls-seed/Info.plist",
                "./ls-seed/README.md",
                "./ls-seed/app.ico"               
            ]
        }
    });
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-execute');
    
    // Used by CD
    
    grunt.registerTask('build', ['clean', 'copy:toApp', 'nodewebkit']);
};