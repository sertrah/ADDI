module.exports = (app) => {
  const client = require("../controllers/client.controller.js");

  var router = require("express").Router();

  // Create a new client
  router.post("/", client.create);

  // Create a new client
  router.get("/lead", client.findLead);
  // Create a new client
  router.get("/prospect", client.findProspect);

  // Retrieve all client
  router.get("/", client.findAll);

  // Retrieve a single client with id
  router.get("/:id", client.findOne);

  // Update a client with id
  router.put("/:id", client.update);

  // Delete a client with id
  router.delete("/:id", client.delete);

  app.use("/api/client", router);
};
