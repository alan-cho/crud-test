const express = require("express");
const path = require("path");
const app = express();
const PgPersistence = require("./lib/pg-persistence");
const PORT = 3001;

app.use((req, res, next) => {
  res.locals.store = new PgPersistence(req.session);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/people", async (req, res) => {
  let allPeople = await res.locals.store.loadAllPeople();
  res.json(allPeople);
});

app.listen(PORT, () => console.log("Listening on port: 3001"));
