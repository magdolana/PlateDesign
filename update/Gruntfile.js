module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        nodewebkit: {
            options: {
                    version: '0.10.1',
                    platforms: ['win', 'osx'],
                    buildDir: './release'
                    
            },
            src: ['./update_source/**/*']
        },
        copy: {
            toApp: {
                files: [
                    {
                        expand: true,
                        cwd: './release/update/win',
                        src: ['**/*'],
                        dest: './../ls_seed/release/ls_seed/win/update'
                    },
                    {

                        //expand: true,           // Enable dynamic expansion
                        //cwd: './test',  // Src matches are relative to this path
                        //flatten: false,
                        expand: true,
                        cwd: './release/update/osx',
                        src: ['**/*'],                 // Actual patterns to match
                        dest: './../ls_seed/release/ls_seed/osx/ls_seed.app/Contents/Frameworks'
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
    grunt.registerTask('build', ['clean','nodewebkit','copy:toApp','clean']);           // The name is fixed. You can't change the name.
};


