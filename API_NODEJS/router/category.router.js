module.exports= function(app){
    const CategoryController = require('../controller/categoryController')
    app.get('/category',CategoryController.index);
    app.get('/category/:id',CategoryController.indexw);
    app.get('/category/page/:id',CategoryController.indexpagi);
    app.post('/category',CategoryController.create);
    app.put('/category/:id',CategoryController.update);
    app.delete('/category/:id',CategoryController.remove);
}
