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

app.get('/student/:name',(req,res) => {
    let sName = req.params.name;
    console.log(sName);
    res.render('student.html',{
        name: sName
    })
})

app.listen(3000)