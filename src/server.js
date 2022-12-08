const morgan = require('morgan');
const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//Routes
app.use('/api/',require('./routes/index'))
app.use('/api/productos',require('./routes/products'))





