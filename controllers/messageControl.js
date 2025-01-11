// controllers/messageController.js
const { getMessages, addMessage } = require("../db");

// Controller to render the home page with messages
const getHomePage = (req, res) => {
  const messages = getMessages();
  res.render("index", { title: "Mini Messageboard", messages });
};

const showForm = (req, res) => {
  res.render("form", { title: "Mini Messageboard" });
};
// Controller to handle adding a new message
const addNewMessage = (req, res) => {
  addMessage(req.body.messageText, req.body.name);
  res.redirect("/");
};

module.exports = { getHomePage, addNewMessage, showForm };
