const mongoose = require('mongoose');
const  dotenv = require('dotenv').config();
const conn = mongoose.createConnection(process.env.DB_LINK);


conn.on('connected', ()=>{
	console.log("Db connected !");
})
conn.on('disconnected', ()=>{
	console.log("DB disconnected !");
})

// const connection = mongoose.connection();
//
// connection.on('open',()=>{
// 	console.log("DB connection opened !")
// })
//
// connection.on('error',()=>{
// 	console.log("error opening Database !");
// })
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = "http://manarythubazar.com/Telangana/Hyderabad/Mehdipatnam";
request(url,(err, res, body)=>{
	if(!err){
		var $ = cheerio.load(body);
		let re = $('.col-lg-12').children();
		if(err){
			console.log(err)
		}

		var prices = [];
		re.map(index=>{
			prices.push($('ol').children().eq(index).find("td").text());
		})
		console.log(prices);
		for (price of prices){
			// const spilt_price = price.split("₹")
			// // prices.push(spilt_price)
			// 	console.log(price.split("₹"));
				const price_final =  price.split("₹");
				console.log(price_final);
				prices.push(price_final)
		}

	}
})
