'use strict';
/**
 * Runs a connect server with livereload functionality
 */
var path = require('path');
// var SiteMinder = require('connect-siteminder-middleware');
// var assignProxyServers = require('../utils/assign-proxy-servers'); 
var buildConfig = require(path.resolve('build/config.js'));

module.exports = {
		livereload: {
				options: {
						livereload: '<%= ports.livereload %>',
						port: '<%= ports.connect %>',
						hostname: '0.0.0.0', /* Change this to 'localhost' to disallow access by IP */
						middleware: getMiddlewares
				}
		}
};

function getMiddlewares(connect, options, middlewares) {
	middlewares = middlewares || [];


	// assignProxyServers(connect, options, middlewares);

	// for ( var i = 0; i < proxies.length; i++ ) {
	// 	var proxy = proxies[i];

	// 	var configObj = {
	// 		host: proxy.host,
	// 		cookiePath: require('user-home') + '/.siteminder-cookies/' + proxy.host + '.siteminder.json'
	// 	};


	// 	if ( proxy.host === 'localhost' ) {
	// 		if ( !proxy.port ) {
	// 			throw new Error('A port is required to use localhost resources.');
	// 		}
	// 		configObj.port = proxy.port;
	// 	}


	// 	middlewares.push(connect().use(proxy.context, new SiteMinder(configObj)));
	// }

	return middlewares.concat([
		connect.static(path.resolve(buildConfig.buildDir)),
		connect.static(path.resolve('vendor'))
	]);
}
