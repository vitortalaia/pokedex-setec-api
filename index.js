const express = require('express');
const pokemon = require('./pokemon');

const app = express();
const port = process.env.PORT || process.env.HTTP_PORT || 3000;

app.get('/pokemon', (request, response) => {
  response.json(pokemon);
});

app.listen(port, () => console.log('Up and running...'));
