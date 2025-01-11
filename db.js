// models/messageModel.js
let messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

// Get all messages
const getMessages = () => messages;

// Add a new message
const addMessage = (text, user) => {
  messages.push({ text, user, added: new Date() });
};

module.exports = { getMessages, addMessage };
