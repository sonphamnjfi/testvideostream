const express = require('express');

const app = express();
app.set('view engine' , 'ejs');
app.set('views' , './views'); //folder views
// app.use(express.static('public'));

app.get('/' , (req, res) => res.render('home')); // function

app.listen(3000, () => console.log('Server Start')); // kết nối đến port 3000 và in ra 
