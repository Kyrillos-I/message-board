// routes/messageRoutes.js
const express = require("express");
const {
  getHomePage,
  addNewMessage,
  showForm,
} = require("../controllers/messageControl");
const router = express.Router();

// Route for the home page
router.get("/", getHomePage);

router.get("/new", showForm);
router.post("/new", addNewMessage);

module.exports = router;
