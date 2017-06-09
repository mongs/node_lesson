/**
 * Created by wally on 2017/6/9.
 */
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.get('/',(req,res) => {
    res.render('index.html',{
        students:['张三','李四','王五']
    })
})

app.get('/news',(req,res) => {
    res.jsonp({name:'wally',age:'17'})
})

app.listen(3000)