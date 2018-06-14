var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://manarythubazar.com/Telangana/Hyderabad/Mehdipatnam',(err, res, body)=>{
	if(!err){
		cheerio.load(body);
		let re = $('.col-md-4').text();
		console.log(re)
	}
})