const Category = require("../model/category")
const CategoryController = {
    index:(req,res)=>{
        Category.getAll((err,data)=>{
            if(err){
                res.json(err);
            }else{
                
                res.json(data);
               
            }
        })
    },
    indexpagi:(req,res)=>{
        Category.pagi(5*(req.params.id-1),(err,data)=>{
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
    indexw:(req,res)=>{
        Category.getAllid(req.params.id,(err,data)=>{
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
        Category.create(req.body,(err,data)=>{
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
    update:(req,res)=>{
        Category.edit(req.params.id,req.body, (err,data)=>{
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
    remove:(req,res)=>{
        Category.remove(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.header('Access-Control-Allow-Origin', "*");
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.json(data);
            }
        })        
    }
};
module.exports = CategoryController