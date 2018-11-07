var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

const express = require('express')

const app = express();

app.get('/', (req, res,next)=> {
		var url = "http://manarythubazar.com/Telangana/Hyderabad/Mehdipatnam";
		request(url,(err, data, body)=>{
		if(!err){
			var $ = cheerio.load(body);
			let re = $('.col-lg-12').children();
		if(err){
			console.log(err)
			res.status(400).json({
				message:'badRequest'
			})
		}

		var prices = [];
		re.map(index=>{
			prices.push($('ol').children().eq(index).find("td").text());
		})
		console.log(prices);
		res.status(200).json(prices)

	}
})

})


app.listen(1000, () => {
	console.log(`Server listenign on port 1000`)
})