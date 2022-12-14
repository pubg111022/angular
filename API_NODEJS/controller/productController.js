const Product = require("../model/product")
const ProductController = {
    index:(req,res)=>{
        Product.getAll((err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    indexw:(req,res)=>{
        Product.getAllid(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.header('Access-Control-Allow-Origin', "*");
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.json(data[0]);
            }
        })
    },
    indexpagi:(req,res)=>{
        Product.pagi(3*(req.params.id-1),(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.header('Access-Control-Allow-Origin', "*");
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.json(data);
            }
        })
    },
    create:(req,res)=>{
        Product.create(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    update:(req,res)=>{
        Product.edit(req.params.id,req.body, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    remove:(req,res)=>{
        Product.remove(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })        
    },
    remove2:(req,res)=>{
        Product.remove2(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })        
    },
    get:(req,res)=>{
        Product.getCate(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    search:(req,res)=>{
        Product.getName(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data)
            }
        })
    }
};
module.exports = ProductController