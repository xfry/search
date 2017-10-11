const express = require('express');
const path    = require('path');
const app     = new express();

app.use(express.static(path.join(__dirname, './public')));
app.set('views', './public');
app.set("view engine", 'ejs');

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(8000, ()=> {
  console.log('the app is running at port: ', 8000);
});