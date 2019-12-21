
//controllers
const CategoryControllers = require('./controllers/category')
const ArticlesControllers = require('./controllers/article')
const AuthController = require('./controllers/login')
const RegisterController = require('./controllers/register')


//middlewares
const { authenticated } = require('./middleware')

require("express-group-routes")
//instantiate express module
const express = require('express')
//use express in app variable
const app = express()
//define the server port
const port = 5000
//Init Body parser
const bodyParser = require('body-parser')




app.use(bodyParser.json())


app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','*')
    next();
});


app.group("/api/v1", (router) => {

//category
router.get('/categories', CategoryControllers.showAll)
router.get('/category/:id', CategoryControllers.showOne)

//router.post('/category', CategoryControllers.store)
//router.patch('/category/:id', CategoryControllers.update)
//router.delete('/category/:id', CategoryControllers.delete)

//article
router.get('/article', ArticlesControllers.index)
router.get('/article/:id', ArticlesControllers.showPerCatagory)
router.get('/articles', ArticlesControllers.showAll)
router.get('/articles/popular', ArticlesControllers.showPopular)
router.get('/article/show/:id', ArticlesControllers.showArticle)

//register
//router.post('/register', RegisterController.register)

//login
router.post('/login', AuthController.login)
})




app.get('/', (req, res) => {

    res.send('Jambu Biji')
})    


app.listen(port, () => console.log(`Listening on port ${port}!`))