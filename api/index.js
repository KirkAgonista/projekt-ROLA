var express     = require("express"),
    session     = require("express-session"),
    app         = express(),
    port        = process.env.PORT || 8080,
    ip          = process.env.IP,
    morgan      = require("morgan"),
    passport    = require("passport"),
    path        = require("path"),
    bodyParser  = require("body-parser");
    
var postRoutes = require("./routes/posts");
var authRoutes = require("./routes/auth");
var albumRoutes = require("./routes/albums");
var aboutRoutes = require("./routes/about");
var documentsRoutes = require("./routes/documents");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(passport.initialize());
 
app.use(session({
  secret: 'Rola Radom works fine, just fine',
  resave: true,
  saveUninitialized: false
}));

  
    
// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

app.use("/api/posts", postRoutes);

app.use("/api/users", authRoutes);

app.use("/api/albums", albumRoutes);

app.use("/api/about", aboutRoutes);

app.use("/api/documents", documentsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
    

// pass passport for configuration
require('./config/passport')(passport);
// var server = http.createServer(app);
    
app.listen(port, ip, function(){
    console.log("App is running on port " + port);
});