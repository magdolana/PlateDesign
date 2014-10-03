

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        nodewebkit: {
            options: {
                    version: '0.10.1',
                    platforms: ['win', 'osx'],
                    buildDir: './webkitbuilds' // Where the build version of my node-webkit app is saved
            },
            src: ['./ls_seed_copy/**/*'] // Your node-webkit app
        },
        copy: {
            toApp: {
                files: [
                    {
                        expand: true,                                           // required when using cwd
                        cwd: './ls_seed',                                       // set working foler / root to copy
                        src: ['**/*'],                                          // copy all files and subfolders
                        dest: './ls_seed_copy'                                  // destination folder
                    },
                ]
            }
        },
        clean: {
            build: [
                "webkitbuilds",
                "./ls_seed_copy"
            ]
        }
    });
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-execute');
    
    // Used by CD
    grunt.registerTask('build', ['clean', 'copy:toApp', 'nodewebkit']);               //The name is fixed. You can't change the name.
    grunt.registerTask('build', [''])

};