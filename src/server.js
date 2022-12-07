const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//Routes


app.get('/', (_, response) => {
    response.send(`<h1>Hello world</h1>`)
})

app.get('/productos', (_, response) => {
    response.send(allTheProducts());
});

app.get('/productosRandom', (_, response) => {
    response.send(productById());
});





