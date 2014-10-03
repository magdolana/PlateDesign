

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        nodewebkit: {
            options: {
                    version: '0.10.1',
                    platforms: ['win', 'osx'],
                    buildDir: './../release'                                    // Where the build version of my node-webkit app is saved
            },
            src: ['./ls_seed_source/**/*']                                        // Your node-webkit app
        },
        copy: {
            toApp: {
                files: [
                    {
                         src:"./../version/VERSION",
                         dest:"./../release" 
                    }
                ]
            }
        },
        clean: {
            build: [
                "./../release"
            ]
        }
    });
    
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-execute');
    
    // Used by CD
    grunt.registerTask('build', ['clean', 'nodewebkit','copy:toApp']);         //The name is fixed. You can't change the name.
};