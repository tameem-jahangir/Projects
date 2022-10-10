const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://catfact.ninja/fact";

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const catdata = JSON.parse(data);
            console.log(catdata);
        });
    })

    res.send("Server is running.");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");

});