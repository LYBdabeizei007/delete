var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'zcx1812281',
    database:'detele'
})
/* GET home page. */
router.get('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    connection.query('SELECT * FROM list',function (err, rows,fileds) {
        res.send(rows)
    })
});
router.post('/detele', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    console.log(req.body.id)
    connection.query('DELETE FROM list WHERE id='+req.body.id,function (err, rows,fileds) {
        if(err){
            console.log('[DELETE ERROR] - ',err.message);
            return;
        }
        console.log('-------------DELETE--------------');

    })
});

module.exports = router;
