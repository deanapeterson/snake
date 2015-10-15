'use strict';


module.exports = (function(){

	var config = {
	    server: {
	        url: 'http://localhost:<%= connect.livereload.options.port %>/index.html'
	    }
	};

    return  config;
}());