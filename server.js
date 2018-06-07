const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + '/dist'));

// Catch all routes and redirect to the index file
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server started ${port}`);
