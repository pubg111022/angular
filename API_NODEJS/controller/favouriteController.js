const { format } = require("../connect/connectDB");
const Favourite = require("../model/favourite")
const FavouriteController = {
    index:(req,res)=>{
        Favourite.getAll((err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    create:(req,res)=>{
        Favourite.create(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data[0]);
            }
        })
    },
    update:(req,res)=>{
        Favourite.edit(req.params.id,req.body, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    remove:(req,res)=>{
        Favourite.remove(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })        
    },
    indexw:(req,res)=>{
        Favourite.getAllid(req.params.id,(err,data)=>{
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
    view:(req,res)=>{
        Favourite.view(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    remove2:(req,res)=>{
        Favourite.remove2(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })        
    }
};
module.exports = FavouriteController