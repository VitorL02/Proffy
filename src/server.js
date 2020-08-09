

const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses ,
    saveClasses
} =require('./pages')

const nunjucks=require('nunjucks')//configura  nunjucks
const format = require('./utils/format')
nunjucks.configure('src/views', {
express:server,
noCache:true, //desativa o cache


})
server
//receber os dados do req.body
.use(express.urlencoded({extended : true }))
server.use(express.static("public")) //configuraçao do server
//configurar arquivos estaticoos (css images scripts)
.get("/index",pageLanding) 
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses )
.post("/save-class" ,saveClasses)
.listen(5500)