const express = require("express");
const app = express();

//swaggerUi doc
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000; 
const format = require("date-format");
console.log("Starting...");

app.get("/", (req, res) => {
  res.status(200).send("Hello, People!");
});

app.get("/api/v1/instagram", (req, res) => {
  const instagramData = {
    followers: 20,
    following: 900,
    date: format.asString("dd-MM-yyyy hh:mm:ss", new Date()),
  };
  res.status(200).json(instagramData);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebookData = {
    followers: 20,
    following: 900,
    date: format.asString("dd-MM-yyyy hh:mm:ss", new Date()),
  };
  res.status(200).json({ facebookData });
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinData = {
    followers: 20,
    following: 900,
    date: format.asString("dd-MM-yyyy hh:mm:ss", new Date()),
  };
  res.status(200).json(linkedinData);
});

app.get("/api/v1/:name", (req, res) => {
    const params = req.params.name;
    res.status(400).json(params);
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
