/**
 * Created by wally on 2017/6/9.
 */
const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/down',(req,res) => {
    res.download(__dirname + '/public/down.txt','hello.md')
})

app.listen(3000)