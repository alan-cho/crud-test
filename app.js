const express = require("express");
const app = express();
const PgPersistence = require("./lib/pg-persistence");
const PORT = 3001;

app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.store = new PgPersistence(req.session);
  next();
});

app.get("/api", async (req, res) => {
  let allPeople = await res.locals.store.loadAllPeople();
  console.log(allPeople);
});

app.listen(PORT, () => console.log("Listening on port: 3001"));
