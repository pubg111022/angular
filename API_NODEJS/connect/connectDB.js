var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'vegetable'
});
conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connect successfully");
    }
})
module.exports = conn;