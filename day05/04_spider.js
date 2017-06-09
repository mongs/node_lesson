/**
 * Created by wally on 2017/6/9.
 */
const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');

const app = express();

app.use(express.static('public'))

const moocUrl = "http://www.imooc.com/course/list";

app.get('/',(req,res) => {
    superagent.get(moocUrl)
        .end((err,sres) => {
            if(err){
                return next(err)
            }
            var $ = cheerio.load(sres.text);

            $('.course-nav-item a').each(function (index,item) {
                console.log(index,$(item).text())
            })
        })
})

app.listen(3000)