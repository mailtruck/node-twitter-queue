var fs 			= require('fs'),
	path		= require('path'),
	twittter	= require('twitter-node'),
	util		= require('util'),
	yaml 		= require('yaml');

var QUEUE_YAML = 'tweets.yaml';

function readYaml() {
	fs.createReadStream(QUEUE_YAML, function() {});
}


function tweet() {

}