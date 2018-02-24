const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/', function(request, response){
    const sqlText = 'SELECT * FROM pictures';
    pool.query(sqlText)
    .then(function(result){
        console.log('Get result:', result);
        response.send(result.rows);
    })
    .catch(function(error){
        console.log('Error on get', error);
        response.sendStatus(500);
    })
})


module.exports = router;