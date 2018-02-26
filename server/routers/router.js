const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/', function(request, response){
    const sqlText = 'SELECT * FROM pictures ORDER BY id;';
    pool.query(sqlText)
    .then(function(result){
        //console.log('Get result:', result);
        response.send(result.rows);
    })
    .catch(function(error){
        console.log('Error on get', error);
        response.sendStatus(500);
    })
})


router.put('/:id', function(request,response){
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

router.post('/', function(request,response){
    const comment = request.body;
    console.log('add to comments', request.body);
    const sqlText = `INSERT INTO comments (picture_id, comment)
        VALUES ($1, $2);`;
    pool.query(sqlText, [comment.picture_id, comment.comment])
    .then(function(result){
        console.log('Comment added');
        response.sendStatus(201);
    })
    .catch(function(error){
        console.log('Could not add comment', error);
        response.sendStatus(500);
    })
})

router.get('/comment/:id', function(request,response){
    const id = request.params.id;
    console.log('Getting comment by picture');
    const sqlText = `SELECT * FROM comments WHERE picture_id=$1;`
    pool.query(sqlText, [id])
    .then(function(result){
        console.log('Getting comments',result);
        response.send(result.rows);
    })
    .catch(function(error){
        console.log('Could not get comments',error);
        response.sendStatus(500);
    })
})
module.exports = router;