const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/build'));

app.listen(3000, '127.0.0.1', () => {
  console.log('Now listening on http://127.0.0.1:3000')
});
