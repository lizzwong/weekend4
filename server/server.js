const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8888;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

const router = require('./routers/router')

app.use('/info', router);

app.listen(PORT, function(){
    console.log('Listening on port:', PORT);
    
})