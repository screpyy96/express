const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

app.use(express.json());

const webProjects = JSON.parse(fs.readFileSync("data.json"));
// GET endpoint to retrieve a list of web projects
app.get("/api", (req, res) => {
  res.send(webProjects);
});

// POST endpoint to add a new web project
app.post("/api", (req, res) => {
  const { title, description, URL } = req.body;
  const id = webProjects.length + 1;
  const newWebProject = { id, title, description, URL };
  webProjects.push(newWebProject);
  // update the data.json file with the new project
  fs.writeFileSync("data.json", JSON.stringify(webProjects, null, 2));
  res.send(newWebProject);
});

//get endpoint to take a project
app.get("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const webProject = webProjects.find((wp) => wp.id === id);
  if (webProject) {
    res.send(webProject);
    console.log(webProject);
  } else {
    res.status(404).send("Web project not found");
  }
});
// DELETE endpoint to delete a web project with a specific ID
app.delete("/api/:id", (req, res) => {
  const webProjects = webProjectsModule.getWebProjects();
  const id = parseInt(req.params.id);
  const deletedWebProject = webProjects.find((wp) => wp.id === id);
  webProjects = webProjects.filter((wp) => wp.id !== id);
  // update the data.json file with the updated list of projects
  fs.writeFileSync("data.json", JSON.stringify(webProjects, null, 2));
  res.send(deletedWebProject);
});

// PUT endpoint to update a web project title or description with a specific ID
app.put("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const webProject = webProjects.find((wp) => wp.id === id);
  if (title) webProject.title = title;
  if (description) webProject.description = description;
  // update the data.json file with the updated project
  fs.writeFileSync("data.json", JSON.stringify(webProjects, null, 2));
  res.send(webProject);
});

// start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
