const path = require('path');
const request = require('request');
const hbs = require('hbs');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Home page'
  })
})

app.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login Page'
  });
})

app.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Sign-Up Page'
  })
})

app.get('/signup/done', (req, res) => {
   res.render('done', {
     title: 'Done page'
   })
})

app.listen(3000, () => {
  console.log("Server is up..");
})
