module.exports = app => {
  const fake = require("../controllers/fake.controller.js");

  var router = require("express").Router();

  // Retrieve a single fake with id
  router.get("/nationalRegistry/:id", fake.nationalRegistry);

  // Update a fake with id
  router.get("/judicialRecord/:id", fake.judicialRecord);

  // Update a fake with id
  router.get("/score/:id", fake.score);

  app.use("/api/external", router);
};