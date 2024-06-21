const express = require('express')
const app = express()

//Middleware
// app.use(function(req, res, next){
//     console.log("middleware worked!!")
//     next()
// });

// app.use(function(req, res, next){
    // console.log("middleware worked second time!!")
    // next()
//});

//Routes
app.get("/", function(req, res){
    res.send("Champion Mera anuj")
})

app.get("/about", function(req, res){
    res.send("About Page!!")
})

//Error Handlers
app.get("/profile", function(req, res, next){
    return next(new Error("Something went wrong"))
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong, We dont know what')
  })

app.listen(3000)