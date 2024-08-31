const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use('/', (req, res, next) => {
  res.status(404);
  res.send('<h1>page not found</h1>');
});

app.listen(3000);