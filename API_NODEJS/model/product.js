const conn = require('../connect/connectDB');
const Product = {
    getAll:(callback)=>{
        return conn.query("select * from product  order by -id ",callback);
    },
    getAllid:(id,callback)=>{
        return conn.query(`select * from product where ID = ${id}`,callback);
    },
    create:(data,callback)=>{
        return conn.query(`INSERT INTO product(name,price,sale_price,image,category_id,status,description) VALUES ("${data.name}" ,${data.price},${data.sale_price},"${data.image}",${data.category_id},${data.status},"${data.description}")`,callback);
    },
    pagi:(limit,callback)=>{
        return conn.query(`sELECT * from product  order by -id limit  3 OFFSET ${limit}`,callback);
    },
    edit:(id,data,callback)=>{
        return conn.query(`UPDATE product SET name = "${data.name}" , status = "${data.status}" , price = ${data.price} , sale_price = ${data.sale_price}, image = "${data.image}", category_id = ${data.category_id} , description = "${data.description}" WHERE ID = ${id}`,callback);
    },
    remove:(id,callback)=>{
        return conn.query(` DELETE FROM product WHERE ID = ${id}`,callback);
    },
    remove2:(id,callback)=>{
        return conn.query(` DELETE FROM product WHERE category_id = ${id}`,callback);
    },
    getCate:(id,callback)=>{
        return conn.query(` select * FROM product WHERE category_id = ${id}`,callback);
    },
    getName:(name , callback)=>{
        return conn.query(`SELECT * FROM product WHERE name like "%${name}%"`,callback)
    }
}
module.exports = Product;