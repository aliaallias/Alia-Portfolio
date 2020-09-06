<<<<<<< HEAD
const express = require('express')
const app = express()
 
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/contact', (req, res)=> {
    res.render('contact')
})
 
=======
const express = require('express')
const app = express()
 
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/contact', (req, res)=> {
    res.render('contact')
})
 
>>>>>>> cc4ee924aaadbeb260414b39e10283c284e769fa
app.listen(3010)