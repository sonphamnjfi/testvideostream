const express = require('express');

const app = express();
app.set('view engine' , 'ejs');
app.set('views' , './views'); //folder views

app.get('/' , (req, res) => res.render('home')); // funstion

app.listen(3000, () => console.log('Server Start')); // kết nối đến port 3000 và in ra 
