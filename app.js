const express = require("express");
const sendMailController = require("./controllers/sendMail_controller");

const app = express();

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello");
});

// Define a route for sending mail
app.get("/send", sendMailController);

// Function to start the server
const start = async () => {
  try {
    app.listen(5000, () => {
      console.log("Server live on port 5000");
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

// Start the server
start();
