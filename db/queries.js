const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messageboard");
  return rows;
}

async function addMessage(name, text) {
  await pool.query("INSERT INTO messageboard (name, message) VALUES ($1,$2)", [
    name,
    text,
  ]);
}

module.exports = { getMessages, addMessage };
