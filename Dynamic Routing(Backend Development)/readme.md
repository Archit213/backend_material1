# Project Steps
1. initialize a project with npm
    - npm init -y -> creates package.json file
2. express install
    - npm i express -> install express package

## Dynamic Routing 
    1. Dynamic Routing (make the route dynamic using :)
    2. How to get data coming from frontend at backend route
    eg : 
    app.get("/profile/:username", function(req, res){
    res.send(`welcome, ${req.params.username}`)
    })

## Setting up parsers for form
    - app.use(express.json())
    - app.use(express.urlencoded({extended : true}))
## Setting up ejs for ejs pages
    1. install ejs from npm -> npm i ejs
    2. Make a views folder and inside create a filename.ejs file i.e similar to html
    3. setup ejs as a view engine -> app.set('view engine', 'ejs') ; inside router use (res.render("filename"))
```
<%= 2+2 %> perform dynamic operation     
```
## Setting up public static files
   - app.use(express.static(path.join(__dirname, 'public')))
   - Make a public folder and inside that create three folders stylesheets, images and javascripts