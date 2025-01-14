// controllers/messageController.js
const { getMessages, addMessage } = require("../db/queries");

// Controller to render the home page with messages
const getHomePage = async (req, res) => {
  const messages = await getMessages();
  res.render("index", { title: "Mini Messageboard", messages });
};

const showForm = (req, res) => {
  res.render("form", { title: "Mini Messageboard" });
};
// Controller to handle adding a new message
const addNewMessage = async (req, res) => {
  await addMessage(req.body.name, req.body.messageText);
  res.redirect("/");
};

module.exports = { getHomePage, addNewMessage, showForm };
