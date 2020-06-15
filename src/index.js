const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json({ message: 'Hello projects' });
});

app.listen('3333', () => {
  console.log('Server is listening on 3333');
})