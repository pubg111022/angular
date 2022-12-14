const express = require("express");
const app = express();
var multer  = require('multer')
const bodyParser = require("body-parser");
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())
app.use(express.static(__dirname+'/uploads'))
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
var storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads/images');
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})
var upload = multer({storage:storage})
app.post('/upload',upload.single('file'),(req,res,next)=>{
    console.log(req.file);
    if(!req.file){
        res.status(500);
        return next(err);
    }
    res.json(req.file.filename);
})

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});
require('./router/category.router')(app);
require('./router/product.router')(app);
require('./router/favourite.router')(app);
require('./router/account.router')(app);
app.listen(3000)