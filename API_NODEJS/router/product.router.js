module.exports= function(app){
    const ProductController = require('../controller/productController')
    app.get('/product',ProductController.index);
    app.post('/product',ProductController.create);
    app.put('/product/:id',ProductController.update);
    app.delete('/product/:id',ProductController.remove);
    app.delete('/product/remove/:id',ProductController.remove2);
    app.get('/product/page/:id',ProductController.indexpagi);
    app.get('/product/:id',ProductController.indexw);
    app.get('/product/get/:id',ProductController.get);
    app.get('/product/search/:id',ProductController.search)
}
