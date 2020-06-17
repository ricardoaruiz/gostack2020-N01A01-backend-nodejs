const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();
app.use(express.json());
app.use(cors());

const projects = [];

// Middleware de log de tempo de execução customizado
const logRequests = (request, response, next) => {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.time(logLabel);
  next();
  console.timeEnd(logLabel)
}

// Middleware de validação de id customizado
const validateProjectId = (request, response, next) => {
  const { id } = request.params;
  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID'});
  }
  return next();
};

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

// Mapping a route on app
app.get('/projects', (request, response) => {  
 const { title } = request.query

 const filteredProject = title 
    ? projects.filter(project => project.title.toLowerCase().includes(title.toLowerCase()))
    : projects;

    return response.json(filteredProject);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = {
    id: uuid(),
    title,
    owner,
  }
  projects.push(project);
  response.json(project).status(201)
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(404).send();
  }

  const changedProject = {
    id,
    ...request.body
  }

  projects.splice(projectIndex, 1, changedProject);

  return response.json(changedProject).status(200);
  
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0 ) {
    return response.status(404).send();
  }

  projects.splice(projectIndex, 1);
  response.status(204).send();
})

// Start server
app.listen('3333', (error) => {
  console.log('error =====> ', error)
  console.log('Server is listening on 3333');
});