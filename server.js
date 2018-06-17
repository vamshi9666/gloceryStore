var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = "http://manarythubazar.com/Telangana/Hyderabad/Mehdipatnam";
request(url,(err, res, body)=>{
	if(!err){
		var $ = cheerio.load(body);
		let re = $('.row').children();


		var prices = [];
		re.map(index=>{
			prices.push($('ol').children().eq(index).find("td").text());
		})
		console.log(prices)
		
	}
})