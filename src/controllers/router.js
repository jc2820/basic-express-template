const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Hello world</h1>`);
});

// Basic error handling - these can be updated to render views.
router.use(function (error, req, res, next) {
  console.error(error);
  const status = error.status || 500;
  res.status(status).send(`<h1>Something went wrong</h1>`);
});

router.use(function (req, res, next) {
  res.status(404).send(`<h1>404: Page not found</h1>`);
});

module.exports = router;
