// Generated on 2015-07-28 using generator-angular 0.12.1
'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  grunt.initConfig({

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['app/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      compass: {
        files: ['app/styles/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer:server']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/**/*.html',
          'app/**/*.tmpl',
          '.tmp/styles/**/*.css',
          'app/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static('app')
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: 'dist'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'app/**/*.js'
        ]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: 'dist/**/*'
        }]
      },
      server: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '.sass-cache'
          ]
        }]
      }
    },

    wiredep: {
      app: {
        src: ['app/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['app/styles/**/*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglify'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    compass: {
      options: {
        sassDir: 'app/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: 'app/images',
        javascriptsDir: 'app/scripts',
        fontsDir: 'app/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: 'dist/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    ngtemplates: {
      dist: {
        options: {
          module: 'mainModule',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'scripts/scripts.js'
        },
        cwd: 'app',
        src: '**/*.tmpl',
        dest: '.tmp/templateCache.js'
      }
    },

    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    cdnify: {
      dist: {
        html: ['dist/*.html']
      }
    },

    usemin: {
      html: ['dist/**/*.html'],
      css: ['dist/styles/**/*.css'],
      js: ['dist/scripts/**/*.js'],
      options: {
        assetsDirs: [
          'dist',
          'dist/images',
          'dist/styles'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html'],
          dest: 'dist'
        }]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'images/**/*.{webp}',
            'styles/fonts/**/*.*'
          ]
        }, {
          expand: true,
          cwd: 'app/images',
          dest: 'dist/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: 'dist'
        }]
      },
      styles: {
        expand: true,
        cwd: 'app/styles',
        dest: '.tmp/styles/',
        src: '**/*.css'
      }
    }
  });


  grunt.registerTask('serve', [
    'clean:server',
    'jshint',
    'wiredep',
    'compass:server',
    'autoprefixer:server',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'clean:server',
    'jshint',
    'wiredep',
    'useminPrepare',
    'compass:dist',
    'autoprefixer',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'usemin',
    'htmlmin',
    'clean:server'
  ]);

  grunt.registerTask('default', 'Compile then start a connect web server', function () {
    grunt.log.warn('Next time, use `grunt serve`.');
    grunt.task.run(['serve']);
  });
};
