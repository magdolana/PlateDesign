module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        nodewebkit: {
            options: {
                    version: '0.10.1',
                    platforms: ['win', 'osx'],
                    buildDir: './release',               // Where the build version of my node-webkit app is saved
                    downloadUrl: 'http://dl.nwjs.io/'    // Temporary fix: NodeWebkit binaries are located at a new address
            },
            src: [                                       // Your node-webkit app source files
                './package.json',
                './index.html',
                './public/**/*'
            ]
        },
        copy: {
            toApp: {
                files: [
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/ls_seed/win/VERSION'
                    },
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/ls_seed/osx/ls_seed.app/Contents/Resources/VERSION'
                    }
                ]
            }
        },
        clean: {
            build: [
                "./release"
            ]
        }
    });
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-execute');
    
    // Used by CD
    grunt.registerTask('build', ['clean','nodewebkit','copy:toApp']);   // The name is fixed. You can't change the name.
    
};