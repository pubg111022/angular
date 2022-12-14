module.exports= function(app){
    const AccountController = require('../controller/accountController')
    app.get('/account',AccountController.index);
    app.post('/account',AccountController.create);
    app.get('/account/:id',AccountController.indexw);
    app.put('/account/:id',AccountController.update);
    app.delete('/account/:id',AccountController.remove);
    app.get('/account/email/:email',AccountController.getacc)
}
