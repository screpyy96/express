const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

let webProjects = [
  {"id": 1, "title": "React Game!", "description": "Tic tac toe game created using Create React app.", "URL": "http://heroku/myapp/game/"},
  {"id": 2, "title": "Online store", "description": "Online store created with HTML, CSS and JavaScript.", "URL": "https://git.com/myrepos/shop/index"}
];

// GET endpoint to retrieve a list of web projects
app.get('/api', (req, res) => {
  res.send(webProjects);
});

// POST endpoint to add a new web project
app.post('/api', (req, res) => {
  const { title, description, URL } = req.body;
  const id = webProjects.length + 1;
  const newWebProject = { id, title, description, URL };
  webProjects.push(newWebProject);
  res.send(newWebProject);
});

// DELETE endpoint to delete a web project with a specific ID
app.delete('/api/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedWebProject = webProjects.find(wp => wp.id === id);
  webProjects = webProjects.filter(wp => wp.id !== id);
  res.send(deletedWebProject);
});

// PUT endpoint to update a web project title or description with a specific ID
app.put('/api/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const webProject = webProjects.find(wp => wp.id === id);
  if (title) webProject.title = title;
  if (description) webProject.description = description;
  res.send(webProject);
});

// start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
