const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/', function(request, response){
    const sqlText = 'SELECT * FROM pictures ORDER BY id;';
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


router.put('/:id', function(request,response){
    console.log('TRYING TO ADD HEART');
    
    const id = request.params.id
    const sqlText = 'UPDATE pictures SET hearts = hearts + 1 WHERE id=$1;';
    pool.query(sqlText, [id])
    .then(function(result){
        console.log('Heart added',result);
        response.sendStatus(201);
    })
    .catch(function(error){
        console.log('Could not add heart',error);
        response.sendStatus(500);
    })
})

module.exports = router;