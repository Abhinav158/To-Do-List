//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
//Add some Default items into the list 
const items = ["Get groceries", "DSA Practice", "Web Development"];
const workItems = [];
//When we create a const array in javascript, we can push items into the array
//But we cannot assign this to a new array
//Similarly, a const object's value can be changed for a particular key 
//But we cannot assign this to a new entirely different object 


//Tells our app to use ejs as its view engine 
app.set("view engine", "ejs");
//Use body parser as well
app.use(bodyParser.urlencoded({extended: true}));
//Give the location of your static files for express js to use it
app.use(express.static("public"));

app.get("/", function (req, res) {
     
    let day = date.getDate();  
    //To get only the day, use date.getDay() 
    //Send response to the list.ejs file which is a html file
    res.render("list", {listTitle: day,  newListItems: items});
});



app.post("/", function(req, res){
    let item = req.body.newItem;
    //Check which list needs to add the element - work or general list
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    //General list 
    else{
        items.push(item);
        res.redirect("/");
    }  
   
    
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})


app.listen(3000, function () {
    console.log("Server running on port 3000!");
});

//Important: We can use only one res.send() but can use many res.write()
//let and const are local variables