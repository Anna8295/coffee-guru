const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

//Views engine setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Static folder 
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about-us', (req, res) => {
    res.render('aboutUs')
})

app.get('/create-your-plan', (req, res) => {
    res.render('createYourPlan');
})


app.listen(3005, () => {
    console.log('listening on port 3000')
})