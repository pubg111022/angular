const conn = require('../connect/connectDB');
const Category = {
    getAll:(callback)=>{
        return conn.query("select * from category",callback);
    },
    getAllid:(id,callback)=>{
        return conn.query(`select * from category where ID = ${id}`,callback);
    },
    pagi:(limit,callback)=>{
        return conn.query(`sELECT * from category limit 5 OFFSET ${limit}`,callback);
    },
    create:(data,callback)=>{
        return conn.query(`insert into category(name,status) values("${data.name}",${data.status})`,callback);
    },
    edit:(id,data,callback)=>{
        return conn.query(`UPDATE category SET name = "${data.name}" , status = "${data.status}" WHERE ID = ${id}`,callback);
    },
    remove:(id,callback)=>{
        return conn.query(` DELETE FROM category WHERE ID = ${id}`,callback);
    }
}
module.exports = Category;