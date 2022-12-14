const conn = require('../connect/connectDB');
const Account = {
    getAll:(callback)=>{
        return conn.query("select * from account",callback);
    },
    getAllid:(id,callback)=>{
        return conn.query(`select * from account where ID = ${id}`,callback);
    },
    create:(data,callback)=>{
        return conn.query(`insert into account(name,email,password) values("${data.name}","${data.email}","${data.password}")`,callback);
    },
    edit:(id,data,callback)=>{
        return conn.query(`UPDATE account SET name = "${data.name}" , email = "${data.email}" , password = "${data.password}" ,role = "${data.role}" WHERE ID = ${id}`,callback);
    },
    remove:(id,callback)=>{
        return conn.query(` DELETE FROM account WHERE ID = ${id}`,callback);
    },
    getaccount:(email,callback)=>{
        return conn.query(`select account.email , account.password , account.id , account.role from account where email like "${email}"`,callback)
    }
}
module.exports = Account;