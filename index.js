const axios = require('axios');
const cheerio = require('cheerio');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
// const smtg = require(__dirname+"/index.html")


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile( path.join(__dirname,"/index.html"));
});

app.post("/",function (req, res) {
    let url = req.body.url;
    axios.get(url)
      .then(res => {
        const html = res.data;
        const $ = cheerio.load(html);
        const ratting=$("#acrCustomerReviewText");
        // const salePrice = $('.sale-price').text()
        console.log(ratting.text());
      }).catch(console.error);
    });

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
      