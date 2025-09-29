const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example API for contact form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Contact:", name, email, message);

  // Here you can save data to DB (MongoDB/MySQL) or send email
  res.json({ success: true, msg: "Message received successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
