var express = require("express");
var path = require("path");
var app = express();
app.set("port", (process.env.PORT || 5000));
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "./public/views/index.html"));
});
app.listen(app.get("port"), function(){
    console.log("Server is up! Port: "+app.get("port"));
});