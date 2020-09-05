const express = require('express')
const app = express()
 
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/contact', (req, res)=> {
    res.render('contact')
})
 
app.listen(3010)