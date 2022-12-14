module.exports= function(app){
    const FavouriteController = require('../controller/favouriteController')
    app.get('/favourite',FavouriteController.index);
    app.post('/favourite',FavouriteController.create);
    app.put('/favourite/:id',FavouriteController.update);
    app.delete('/favourite/:id',FavouriteController.remove);
    app.delete('/favourite/remove/:id',FavouriteController.remove2);
    app.get('/favourite/view/:id',FavouriteController.view);
    app.get('/favourite/:id',FavouriteController.indexw);
}
