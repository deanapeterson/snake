'use strict';

/**
 * `sass` handles our SASS compilation and uglification automatically. Only our `main.sass` file is included in compilation; all other files must be
 * imported from this file.
 */
module.exports = {
    build: {
        options: {
            style: 'expanded',
            sourceMap: true,
            sourceMapContents: true,
            includePaths: [
                'node_modules/foundation-sites/scss',
                'node_modules/ricola3-streamline-skin/node_modules/foundation-sites/scss',
                'node_modules/ricola3-streamline-skin/node_modules/ricola3/node_modules/foundation-sites/scss',
                'node_modules/ricola3-streamline-skin/src/scss',
                'node_modules/ricola3/scss',
                'node_modules/ricola3-streamline-skin/node_modules/ricola3/scss'
            ]
        },
        files: {
            '<%= buildConfig.buildDir %>/assets/main.css': '<%= buildConfig.appFiles.sass%>'
        }
    },
};
