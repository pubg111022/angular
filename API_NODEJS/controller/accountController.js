const Account = require("../model/account")
const AccountController = {
    index:(req,res)=>{
        Account.getAll((err,data)=>{
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
        Account.getAllid(req.params.id,(err,data)=>{
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
    create:(req,res)=>{
        Account.create(req.body,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    update:(req,res)=>{
        Account.edit(req.params.id,req.body, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    remove:(req,res)=>{
        Account.remove(req.params.id,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })        
    },
    getacc:(req,res)=>{
        Account.getaccount(req.params.email,(err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data[0]);
            }
        })
    }
};
module.exports = AccountController