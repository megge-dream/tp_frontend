module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: { /* Подзадача */
                options: {
                    livereload: true,
                    port: 8000, /* номер порта */
                    base: 'public' /* публичная директория */
                }
            },
        }, /* grunt-contrib-connect */
        fest: {
            templates: { /* Подзадача */
                files: [{
                    expand: true,
                    cwd: 'templates', /* исходная директория */
                    src: '*.xml', /* имена шаблонов */
                    dest: 'public/js/tmpl' /* результирующая директория */
                }],
                options: {
                    template: function (data) { /* формат функции-шаблона */
                        return grunt.template.process(
                            /* присваиваем функцию-шаблон переменной */
                            'var <%= name %>Tmpl = <%= contents %> ;',
                            {data: data}
                        );
                    }
        
                }
            } 
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/js/**/*.js'],
                dest: 'public/built.js'
            }
        },
        watch: {
            fest: {
                files: ['templates/*.xml'], /* следим за шаблонами */
                tasks: ['concat', 'fest'], /* перекомпилировать */
                options: {
                    atBegin: true, /* запустить задачу при старте */
                }
            },
            server: {
                files: [
                    'public/js/**/*.js', /* следим за статикой */
                    'public/css/**/*.css'
                ],
                options: {
                    interrupt: true,
                    livereload: true /* перезагрузить страницу */
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-fest');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'connect', 'watch']);
};
