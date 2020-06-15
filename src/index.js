const express = require('express');
const app = express();
app.use(express.json());

// Mapping a route on app
app.get('/projects', (request, response) => {
  
  // Query Params
  const { title, owner } = request.query
  console.log(title, owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.post('/projects', (request, response) => {

  // Body
  console.log(`O corpo da requisição é: ${JSON.stringify(request.body)}`);

  response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]).status(201)
});

app.put('/projects/:id', (request, response) => {

  // Route Params
  const { id } = request.params;
  console.log(`O id recebido foi ${id}`);

  response.json([
    'Projeto 10',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]).status(200)
});

app.delete('/projects/:id', (request, response) => {

  // Route Params
  const { id } = request.params;
  console.log(`O id recebido foi ${id}`);

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