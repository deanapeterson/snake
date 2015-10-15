'use strict';

var grunt = require('grunt');
var chalk = require('chalk');
var SiteMinder = require('connect-siteminder-middleware');
var buildConfig = require('../config.js');
var proxy = require('proxy-middleware'); //https://www.npmjs.com/package/proxy-middleware
var url = require('url');
// var proxyServers = require('../proxy-servers');
// var proxyServices = require('../proxy-services');
var proxyServers = buildConfig.proxyServers;
var proxyServices = buildConfig.proxyServices;



function assignProxyServers(connect, options, middlewaresAry){
	var proxyto = grunt.option('proxyto');


	if(typeof middlewaresAry === 'undefined'){
		throw 'middlewares is not provided';
	}

	for(var serviceUrl in proxyServices){
		if(proxyServices.hasOwnProperty(serviceUrl)){
			addMiddleware(serviceUrl, proxyServices[serviceUrl]);
		}
	}

	function addMiddleware( serviceUrl, options ){
		var proxyServerName = proxyto || options.defaultServer;
		var server = proxyServers[proxyServerName];
		var serverInstance;

		serverInstance = server.type === 'SiteMinder' ? createSiteMinder(server) : createProxy(server, serviceUrl, server.path);

		console.log(
			chalk.bold.green('Proxy Added: '),
			chalk.green('Routing ' + serviceUrl + ' to ' + server.host)
		);

		if(server.prodWarning){
			console.log();
			console.log(chalk.red.bold('#########################################################'));
			console.log(chalk.red.bold('############### USING PRODUCTION SERVICES ###############'));
			console.log(chalk.red.bold('#########################################################'));
			console.log();
		}

		return middlewaresAry.push(
			connect().use(serviceUrl, serverInstance)
		);
	}

	function createSiteMinder(server){
		return new SiteMinder(server);
	}

	function createProxy(server, endpoint){
		var addEndpoint = server.endpoint ? server.endpoint : (endpoint || '');
		var proxyUrl = 'http://' + server.host + ':' + server.port + '/'  + addEndpoint;

		console.log(server, endpoint);

		return proxy(url.parse(proxyUrl));
	}

}

module.exports = assignProxyServers;