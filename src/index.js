const express = require('express');
const app = express();

// Mapping a route on app
app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.post('/projects', (request, response) => {
  response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]).status(201)
});

app.put('/projects/:id', (request, response) => {
  response.json([
    'Projeto 10',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]).status(200)
});

app.delete('/projects/:id', (request, response) => {
  response.json([
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]).status(200)
})

// Start server
app.listen('3333', () => {
  console.log('Server is listening on 3333');
});