const conn = require('../connect/connectDB');
const Favourite = {
    getAll:(callback)=>{
        return conn.query("select * from favourite",callback);
    },
    create:(data,callback)=>{
        return conn.query(`insert into favourite(account_id,product_id) values(${data.account_id},${data.product_id})`,callback);
    },
    getAllid:(id,callback)=>{
        return conn.query(`select * from favourite where ID = ${id}`,callback);
    },
    edit:(id,data,callback)=>{
        return conn.query(`UPDATE favourite SET account_id = ${data.account_id} , product_id = ${data.product_id} `,callback);
    },
    remove:(id,callback)=>{
        return conn.query(` DELETE FROM favourite WHERE ID = ${id}`,callback);
    },
    view:(id,callback)=>{
        return conn.query(`SELECT product.id,favourite.id as ID,favourite.product_id, SUM(product.price) as Total , SUM(product.sale_price) as TotalAmount , COUNT(favourite.product_id) as quantity ,product.name , product.image FROM favourite
        INNER JOIN product ON favourite.product_id = product.id 
         WHERE favourite.account_id = ${id}
        GROUP by favourite.product_id ORDER BY product.id`,callback)
    },
    remove2:(idz,callback)=>{
        return conn.query(` DELETE FROM favourite WHERE product_id = ${idz}`,callback);
    }
}
module.exports = Favourite;